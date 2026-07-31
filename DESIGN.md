---
name: Neticar
description: Sobria presencia digital para un estudio técnico de software a medida.
colors:
  ink: "#0a0a0d"
  raised: "#111116"
  graphite: "#17171d"
  deep-field: "#0d0d11"
  line: "#303038"
  soft-line: "#202027"
  paper: "#f4f0fa"
  muted: "#b8b1c1"
  violet: "#9f42eb"
  violet-deep: "#6d16bf"
  violet-soft: "#c8a4e9"
  violet-bright: "#b865ff"
typography:
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(3.6rem, 8vw, 7.2rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.6rem)"
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "25px"
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "17px"
    lineHeight: 1.7
  label:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    letterSpacing: "0.055em"
rounded:
  square: "0px"
spacing:
  control-y: "11px"
  control-x: "20px"
  card: "26px"
  grid-gap: "18px"
  section: "132px"
components:
  button-primary:
    backgroundColor: "{colors.violet-deep}"
    textColor: "#fff"
    rounded: "{rounded.square}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "44px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.violet}"
  text-link:
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    typography: "{typography.label}"
  project-card:
    backgroundColor: "{colors.graphite}"
    rounded: "{rounded.square}"
    padding: "{spacing.card}"
---

# Design System: Neticar

## Overview

**Creative North Star: "The Technical Archive"**

Neticar reads as a premium, nocturnal record of technical work: graphite fields, measured editorial type, thin structural rules, and a violet signal used with intent. It is composed to make a direct service offer feel credible before it feels promotional.

The interface stays quiet enough for project imagery and practical copy to carry the evidence. Large type creates the hierarchy; tonal shifts and borders organize the page instead of floating panels, glass effects, neon treatments, or decorative gradients.

**Key Characteristics:**

- Dark, archival tonal fields rather than a single flat black canvas.
- Dense, left-led editorial hierarchy with clear working margins.
- Restrained violet used as a signal for action, emphasis, and metadata.
- Square-cut, ruled components with purposeful image treatment.

**The Evidence-First Rule.** The visual system gives work, experience, and a direct action room to establish trust; decoration never competes with that proof.

## Colors

The palette is a graphite archive illuminated by one controlled violet family.

### Primary

- **Signal Violet:** the principal action color, reserved for the main CTA and state changes.
- **Deep Violet:** the resting fill for primary actions, providing a quieter entry point to the accent.

### Secondary

- **Orchid Metadata:** a softened violet for eyebrow labels, periods, organizations, and technical detail.
- **Bright Editorial Violet:** the sharper accent for a single emphatic phrase inside a headline.

### Neutral

- **Archive Ink:** the page’s deepest field and base behind the navigation and footer.
- **Raised Graphite:** the alternating surface for work and profile sections.
- **Deep Field:** the near-black counterpart for the trajectory and contact sections.
- **Graphite Card:** a contained image-card field that separates media from its parent surface.
- **Structural Rule:** the firm divider for cards, timelines, and image frames.
- **Quiet Rule:** the lower-contrast divider that separates broad page regions.
- **Cool Paper:** the high-contrast text color for headings and primary controls.
- **Technical Gray:** the quieter body-copy color.

**The One Signal Rule.** Violet is an accent, not a wash: keep the dominant visual field graphite and let the violet family identify emphasis or action.

## Typography

**Display Font:** Montserrat with Arial fallback.

**Body Font:** Open Sans with Arial fallback.

**Character:** Montserrat supplies compressed, weighty editorial authority; Open Sans keeps operational copy open and legible. The pairing is precise and contemporary, never ornamental.

### Hierarchy

- **Display** (800, `clamp(3.6rem, 8vw, 7.2rem)`, 0.98): reserved for the hero proposition and allowed to fill the left visual field.
- **Headline** (800, `clamp(2rem, 4vw, 3.6rem)`, 1.08): section-level statements and the principal contact invitation.
- **Title** (Montserrat, 25px, 1.08): project and timeline titles.
- **Body** (Open Sans, 17px, 1.7): explanatory copy, kept to compact readable measures.
- **Label** (Open Sans, 800, 12px, 0.055em, uppercase): navigation, CTAs, and utility labels; eyebrow metadata is smaller and more widely tracked.

**The Weight Carries the Drama Rule.** Use scale, tight tracking, and weight for authority; do not substitute novelty fonts, italics, or excessive color.

## Layout

The desktop frame uses a centered 1200px container with a 24px outer gutter per side, expanded to a 16px gutter on narrow screens. Broad sections use 132px vertical padding, decreasing to 88px at 800px and below. The hero is full viewport height, with its offer and actions deliberately aligned to the left; a quiet center rule is desktop-only.

Projects follow a 12-column grid with 18px gaps: three-up cards followed by two wider cards. The trajectory and profile use asymmetric two-column layouts with 84px gaps; the trajectory introduction pins while its records scroll. At 800px, those arrangements become single column, project cards become two-up, and at 540px the project grid becomes one-up. Navigation changes from inline links to a compact anchored menu.

**The Working Margin Rule.** Keep content locked to the shared container; use generous section space and disciplined column gaps instead of loose, isolated floating blocks.

## Elevation & Depth

This is a flat-by-default system. Depth comes from alternating graphite fields, thin borders, image overlays, and crop rather than shadows or translucent glass. Project photography sits beneath a dark bottom gradient so text retains authority; portrait photography is grayscale and framed by a structural rule.

**The Tonal Depth Rule.** Add hierarchy through a darker or raised field and a precise line, never through drop shadows, blur, or decorative glow.

## Shapes

Forms are square-cut: controls, cards, media frames, and the mobile menu all use 0px corner radius. Borders are thin, muted graphite rules. Images are clipped by their rectangular containers; their movement on hover is limited to a slight scale and opacity lift.

**The Hard Edge Rule.** Maintain crisp rectangles and hairline division throughout the system; introducing rounded cards or pills changes the archive’s technical character.

## Components

### Buttons

The primary action is compact, uppercase, and unmistakable without becoming loud.

- **Shape:** square edges (0px radius) and a 44px minimum height.
- **Primary:** deep violet fill with a violet border, white label, and `11px 20px` padding.
- **Hover / Focus:** hover lifts the fill to signal violet; keyboard focus uses a 2px light-violet outline with a 5px offset.

### Text Links

- **Style:** cool-paper, semibold inline action with a restrained bottom rule and 5px breathing room.
- **Hover:** the text and rule move to light violet; this is the secondary action, not a button substitute for the principal CTA.

### Cards / Containers

- **Corner Style:** square (0px radius).
- **Background:** graphite card field with a structural-rule border.
- **Image treatment:** muted, slightly desaturated image beneath a high-contrast bottom overlay; on hover, only image opacity and a 3% scale change.
- **Internal Padding:** 26px for project copy.

### Navigation

- **Style:** fixed archive-ink band with a quiet lower rule and a 72px desktop height.
- **Typography:** uppercase, bold, widely tracked labels in technical gray; hover shifts to light violet.
- **Mobile treatment:** desktop links and CTA give way to a 42px square rule-bound toggle and a compact raised-graphite flyout.

### Timeline

- **Style:** ruled records in a two-column desktop grid; period and organization use orchid metadata while the role remains cool paper.
- **Interaction:** each role is a full-width, text-led disclosure control with a violet plus/minus signal; expanded details remain within the record rather than opening a panel.

### Reveal

- **Style:** section and record content enters with a subtle 18px upward settle and opacity change.
- **Reduced motion:** when the system asks for less motion, all reveal states are immediately visible and transition durations collapse.

## Do's and Don'ts

### Do:

- **Do** use graphite tonal shifts and 1px rules to establish hierarchy.
- **Do** keep the hero offer and its primary action in the left field.
- **Do** reserve the violet family for calls to action, controlled emphasis, and technical metadata.
- **Do** use Montserrat for compact high-impact headings and Open Sans for readable explanation.
- **Do** preserve visible keyboard focus and the reduced-motion behavior.

### Don't:

- **Don't** introduce WebGL, neon glows, glassmorphism, or floating shadowed surfaces.
- **Don't** round controls, cards, or image frames into pills or soft tiles.
- **Don't** turn every heading, border, or body element violet; the field must remain predominantly graphite.
- **Don't** center a new hero offer or bury its action below decorative content.
