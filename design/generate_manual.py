from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Flowable, Image, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parent
HTML_SOURCE = ROOT / "manual-de-marca-neticar.html"
OUTPUT = ROOT / "manual-de-marca-neticar.pdf"
ASSETS = ROOT / "assets"
FONT_DIR = ASSETS / "fonts"

PAPER = colors.HexColor("#F3ECDD")
RAISED = colors.HexColor("#FAF7EF")
INK = colors.HexColor("#0B0B0B")
INK_SOFT = colors.HexColor("#27251F")
MUTED = colors.HexColor("#5B574D")
MUTED_ON_INK = colors.HexColor("#C8C1B3")
AMBER = colors.HexColor("#D5A52C")
LINE = colors.HexColor("#D8D0BF")
LINE_ON_INK = colors.HexColor("#46433B")
PAGE_W, PAGE_H = A4


class ManualParser(HTMLParser):
    """Read the editable HTML chapters into simple ReportLab flowables."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.pages: list[list[tuple]] = []
        self.dark_pages: list[bool] = []
        self.current: list[tuple] | None = None
        self.capture: tuple[str, list[str], dict[str, str]] | None = None
        self.swatch: dict[str, object] | None = None
        self.figure: dict[str, object] | None = None
        self.in_cover = False
        self.cover: dict[str, str] = {}
        self.cover_capture: tuple[str, list[str]] | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_map = {key: value or "" for key, value in attrs}
        if tag == "section" and "page" in attrs_map.get("class", "").split():
            self.in_cover = "cover" in attrs_map.get("class", "").split()
            self.current = None if self.in_cover else []
            if self.in_cover:
                self.cover = {}
            if self.current is not None:
                self.pages.append(self.current)
                self.dark_pages.append("dark" in attrs_map.get("class", "").split())
            return
        if self.in_cover:
            classes = attrs_map.get("class", "").split()
            if tag == "img":
                self.cover["image"] = attrs_map.get("src", "")
            elif tag == "h1":
                self.cover_capture = ("title", [])
            elif tag == "p" and "cover-byline" in classes:
                self.cover_capture = ("byline", [])
            elif tag == "p" and "cover-edition" in classes:
                self.cover_capture = ("edition", [])
            elif tag == "br" and self.cover_capture is not None:
                self.cover_capture[1].append("\n")
            return
        if self.current is None:
            return
        if tag == "figure":
            if "swatch" in attrs_map.get("class", "").split():
                self.swatch = {"hex": attrs_map.get("data-color", "#F3ECDD"), "caption": []}
            else:
                self.figure = {"image": None, "caption": ""}
        if tag in {"h2", "h3", "p", "li", "figcaption"}:
            kind = "eyebrow" if tag == "p" and "page-number" in attrs_map.get("class", "").split() else tag
            self.capture = (kind, [], attrs_map)
        elif tag == "img" and not self.in_cover:
            src = attrs_map.get("src", "")
            if src:
                width = 155 if "/projects/" in src else (420 if "og-personal" in src else 190)
                if self.figure is not None:
                    self.figure["image"] = (src, width)
                else:
                    self.current.append(("image", src, width))

    def handle_data(self, data: str) -> None:
        if self.cover_capture is not None:
            self.cover_capture[1].append(data)
            return
        if self.capture is not None:
            self.capture[1].append(data)

    def handle_endtag(self, tag: str) -> None:
        if self.in_cover:
            if self.cover_capture is not None and tag in {"h1", "p"}:
                key, chunks = self.cover_capture
                value = "".join(chunks).strip()
                self.cover[key] = value if key == "edition" else " ".join(value.split())
                self.cover_capture = None
            if tag == "section":
                self.in_cover = False
            return
        if self.current is None:
            if tag == "section":
                self.in_cover = False
            return
        if self.capture is not None and tag in {"h2", "h3", "p", "li", "figcaption"}:
            kind, chunks, attrs = self.capture
            text = " ".join(" ".join(chunks).split())
            if text:
                if kind == "figcaption" and self.swatch is not None:
                    self.swatch["caption"] = text
                elif kind == "figcaption" and self.figure is not None:
                    self.figure["caption"] = text
                else:
                    self.current.append((kind, text))
            self.capture = None
        if tag == "figure" and self.swatch is not None:
            self.current.append(("swatch", self.swatch["hex"], self.swatch["caption"]))
            self.swatch = None
        elif tag == "figure" and self.figure is not None:
            self.current.append(("figure", self.figure["image"], self.figure["caption"]))
            self.figure = None
        if tag == "section":
            self.current = None


class SwatchCell(Flowable):
    def __init__(self, hex_value: str, caption: str, width: float, height: float = 46) -> None:
        super().__init__()
        self.hex_value = hex_value
        self.caption = str(caption)
        self.width = width
        self.height = height

    def draw(self) -> None:
        color = colors.HexColor(self.hex_value)
        self.canv.setFillColor(color)
        self.canv.setStrokeColor(LINE)
        self.canv.roundRect(0, 5, 28, 28, 4, fill=1, stroke=1)
        self.canv.setFillColor(INK)
        self.canv.setFont("SourceSans3-Semibold", 8.2)
        label, _, hex_text = self.caption.partition("#")
        self.canv.drawString(36, 22, label.strip())
        self.canv.setFillColor(MUTED)
        self.canv.setFont("SourceSans3-Regular", 7.4)
        self.canv.drawString(36, 10, f"#{hex_text.strip()}" if hex_text else self.hex_value)


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("ArchivoBlack", str(FONT_DIR / "ArchivoBlack-Regular.ttf")))
    pdfmetrics.registerFont(TTFont("SourceSans3-Regular", str(FONT_DIR / "SourceSans3-Regular.ttf")))
    pdfmetrics.registerFont(TTFont("SourceSans3-Semibold", str(FONT_DIR / "SourceSans3-Semibold.ttf")))
    pdfmetrics.registerFont(TTFont("SourceSans3-Bold", str(FONT_DIR / "SourceSans3-Bold.ttf")))


def paragraph_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()["BodyText"]
    return {
        "h2": ParagraphStyle("ManualTitle", parent=base, fontName="ArchivoBlack", fontSize=27, leading=30, textColor=INK, spaceAfter=12, keepWithNext=True),
        "h3": ParagraphStyle("ManualSection", parent=base, fontName="ArchivoBlack", fontSize=15.2, leading=18, textColor=INK, spaceBefore=12, spaceAfter=5, keepWithNext=True),
        "p": ParagraphStyle("ManualBody", parent=base, fontName="SourceSans3-Regular", fontSize=10.3, leading=14.1, textColor=MUTED, spaceAfter=7),
        "li": ParagraphStyle("ManualBullet", parent=base, fontName="SourceSans3-Regular", fontSize=10.1, leading=13.7, textColor=MUTED, leftIndent=14, firstLineIndent=0, bulletIndent=1, spaceAfter=5),
        "eyebrow": ParagraphStyle("ManualEyebrow", parent=base, fontName="SourceSans3-Bold", fontSize=8.5, leading=10.5, textColor=colors.HexColor("#765718"), spaceAfter=8, tracking=0.7, keepWithNext=True),
        "figcaption": ParagraphStyle("ManualCaption", parent=base, fontName="SourceSans3-Regular", fontSize=8.4, leading=11, textColor=MUTED, spaceBefore=2, spaceAfter=8),
    }


def fit_image(src: str, max_width: float) -> Image:
    path = ROOT / src
    image = Image(str(path))
    scale = min(max_width / image.imageWidth, 230 / image.imageHeight, 1)
    image.drawWidth = image.imageWidth * scale
    image.drawHeight = image.imageHeight * scale
    image.hAlign = "LEFT"
    return image


def page_story(page: list[tuple], styles: dict[str, ParagraphStyle], usable_width: float, dark: bool = False) -> list[Flowable]:
    story: list[Flowable] = []
    swatches: list[tuple[str, str]] = []
    if dark:
        styles = {name: ParagraphStyle(f"{name}-dark", parent=style) for name, style in styles.items()}
        styles["h2"].textColor = PAPER
        styles["h3"].textColor = PAPER
        styles["p"].textColor = MUTED_ON_INK
        styles["li"].textColor = MUTED_ON_INK
        styles["eyebrow"].textColor = AMBER
        styles["figcaption"].textColor = MUTED_ON_INK

    def flush_swatches() -> None:
        if not swatches:
            return
        cells = [SwatchCell(hex_value, caption, usable_width / 3 - 5) for hex_value, caption in swatches]
        rows = [cells[index:index + 3] for index in range(0, len(cells), 3)]
        table = Table(rows, colWidths=[usable_width / 3] * 3, hAlign="LEFT")
        table.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 3),
            ("RIGHTPADDING", (0, 0), (-1, -1), 3),
            ("TOPPADDING", (0, 0), (-1, -1), 3),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ]))
        story.extend([table, Spacer(1, 5)])
        swatches.clear()

    index = 0
    while index < len(page):
        block = page[index]
        kind = block[0]
        if kind == "swatch":
            swatches.append((str(block[1]), str(block[2])))
            index += 1
            continue
        flush_swatches()
        if kind in {"h2", "h3", "p", "eyebrow", "figcaption"}:
            story.append(Paragraph(escape(str(block[1])), styles[kind]))
        elif kind == "li":
            story.append(Paragraph(escape(str(block[1])), styles["li"], bulletText="•"))
        elif kind == "image":
            story.append(fit_image(str(block[1]), min(float(block[2]), usable_width)))
            story.append(Spacer(1, 4))
        elif kind == "figure":
            figures = [block]
            next_index = index + 1
            while next_index < len(page) and page[next_index][0] == "figure" and page[next_index][1] and "/projects/" in page[next_index][1][0]:
                figures.append(page[next_index])
                next_index += 1
            if len(figures) > 1 and figures[0][1] and "/projects/" in figures[0][1][0]:
                columns = 2 if len(figures) > 3 else len(figures)
                column_width = usable_width / columns
                cells = []
                for _, image_info, caption in figures:
                    src, max_width = image_info
                    image = fit_image(src, min(float(max_width), column_width - 12))
                    caption_flow = Paragraph(escape(str(caption)), styles["figcaption"])
                    cells.append([image, Spacer(1, 4), caption_flow])
                rows = [cells[row:row + columns] for row in range(0, len(cells), columns)]
                gallery = Table(rows, colWidths=[column_width] * columns, hAlign="LEFT")
                gallery.setStyle(TableStyle([
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 5),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                    ("TOPPADDING", (0, 0), (-1, -1), 5),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                ]))
                story.extend([gallery, Spacer(1, 8)])
                index = next_index
                continue
            image_info, caption = block[1], block[2]
            if image_info:
                story.append(fit_image(image_info[0], min(float(image_info[1]), usable_width)))
            if caption:
                story.append(Paragraph(escape(str(caption)), styles["figcaption"]))
            story.append(Spacer(1, 5))
        index += 1
    flush_swatches()
    return story


def wrap_display_title(title: str, font_size: float, max_width: float) -> list[str]:
    words = title.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if current and pdfmetrics.stringWidth(candidate, "ArchivoBlack", font_size) > max_width:
            lines.append(current)
            current = word
        else:
            current = candidate
    if current:
        lines.append(current)
    return lines


def draw_cover(canvas, doc, cover: dict[str, str]) -> None:
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Offset ochre photo board and its warm-paper frame.
    image_path = ROOT / cover["image"]
    image_x, image_y, image_w, image_h = 344, 218, 190, 302
    canvas.setFillColor(AMBER)
    canvas.rect(image_x + 13, image_y - 13, image_w, image_h, fill=1, stroke=0)
    canvas.setFillColor(PAPER)
    canvas.rect(image_x, image_y, image_w, image_h, fill=1, stroke=0)
    canvas.drawImage(str(image_path), image_x + 7, image_y + 7, width=image_w - 14, height=image_h - 14, preserveAspectRatio=True, anchor="c", mask="auto")

    # Compact TC signature.
    canvas.setFillColor(PAPER)
    canvas.rect(52, 704, 56, 56, fill=1, stroke=0)
    canvas.setFillColor(INK)
    canvas.setFont("ArchivoBlack", 24)
    canvas.drawCentredString(80, 727, "TC")
    canvas.setFillColor(AMBER)
    canvas.rect(68, 714, 24, 3, fill=1, stroke=0)

    canvas.setFillColor(AMBER)
    canvas.setFont("SourceSans3-Bold", 10)
    canvas.drawString(52, 670, cover["byline"])
    canvas.setFillColor(PAPER)
    title_size = 36
    lines = wrap_display_title(cover["title"], title_size, 252)
    if len(lines) > 4:
        title_size = 36 * 4 / len(lines)
        lines = wrap_display_title(cover["title"], title_size, 252)
    canvas.setFont("ArchivoBlack", title_size)
    y = 598
    for line in lines:
        canvas.drawString(52, y, line)
        y -= title_size * 1.25
    canvas.setFillColor(MUTED_ON_INK)
    canvas.setFont("SourceSans3-Regular", 12)
    edition_lines = [line.strip() for line in cover["edition"].splitlines() if line.strip()]
    if edition_lines:
        canvas.drawString(52, y - 6, edition_lines[0])
    if len(edition_lines) > 1:
        canvas.drawString(52, y - 24, " ".join(edition_lines[1:]))

    canvas.setStrokeColor(LINE_ON_INK)
    canvas.setLineWidth(0.7)
    canvas.line(52, 58, PAGE_W - 52, 58)
    canvas.setFillColor(MUTED_ON_INK)
    canvas.setFont("SourceSans3-Regular", 8.5)
    canvas.drawString(52, 40, "NETICAR · FIRMA PERSONAL")
    canvas.drawRightString(PAGE_W - 52, 40, "01 / 12")
    canvas.restoreState()


def draw_running_page(canvas, doc) -> None:
    canvas.saveState()
    dark = doc.page in DARK_PAGE_NUMBERS
    background = INK if dark else PAPER
    foreground = PAPER if dark else INK
    secondary = MUTED_ON_INK if dark else MUTED
    canvas.setFillColor(background)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    canvas.setFillColor(PAPER if dark else INK)
    canvas.rect(42, PAGE_H - 38, 18, 18, fill=1, stroke=0)
    canvas.setFillColor(INK if dark else PAPER)
    canvas.setFont("ArchivoBlack", 7.4)
    canvas.drawCentredString(51, PAGE_H - 32, "TC")
    canvas.setFillColor(foreground if dark else INK_SOFT)
    canvas.setFont("SourceSans3-Semibold", 8)
    canvas.drawString(68, PAGE_H - 31, "TOMÁS COLOMBO  /  NETICAR · FIRMA PERSONAL")
    canvas.setStrokeColor(LINE_ON_INK if dark else LINE)
    canvas.setLineWidth(.6)
    canvas.line(42, PAGE_H - 47, PAGE_W - 42, PAGE_H - 47)
    canvas.line(42, 39, PAGE_W - 42, 39)
    canvas.setFillColor(secondary)
    canvas.setFont("SourceSans3-Regular", 8)
    canvas.drawString(42, 25, "MANUAL DE MARCA")
    canvas.drawRightString(PAGE_W - 42, 25, f"{doc.page:02d} / 12")
    canvas.restoreState()


def build() -> None:
    global DARK_PAGE_NUMBERS
    register_fonts()
    parser = ManualParser()
    parser.feed(HTML_SOURCE.read_text(encoding="utf-8"))
    required_cover_fields = {"title", "byline", "edition", "image"}
    if missing := required_cover_fields - parser.cover.keys():
        raise ValueError(f"Faltan campos de portada en el HTML: {', '.join(sorted(missing))}.")
    if len(parser.pages) != 11:
        raise ValueError(f"El manual debe tener 11 capítulos interiores; se encontraron {len(parser.pages)}.")
    DARK_PAGE_NUMBERS = {index + 2 for index, dark in enumerate(parser.dark_pages) if dark}

    styles = paragraph_styles()
    doc = SimpleDocTemplate(
        str(OUTPUT), pagesize=A4,
        leftMargin=42, rightMargin=42, topMargin=64, bottomMargin=52,
        title="Manual de marca · Neticar / Tomás Colombo",
        author="Tomás Colombo · Neticar",
        subject="Identidad visual y verbal de Neticar",
    )
    usable_width = PAGE_W - doc.leftMargin - doc.rightMargin
    story: list[Flowable] = [PageBreak()]
    for index, page in enumerate(parser.pages):
        if index:
            story.append(PageBreak())
        story.extend(page_story(page, styles, usable_width, parser.dark_pages[index]))
    doc.build(story, onFirstPage=lambda canvas, document: draw_cover(canvas, document, parser.cover), onLaterPages=draw_running_page)


if __name__ == "__main__":
    build()
