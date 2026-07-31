---
name: Neticar
description: El Plano (violetprint). Hoja de dibujo técnico negra #08080C con tinta violeta de marca; gramática de dibujo técnico (graticule de 72px, cotas, esquineros, plate-rules y bloques de lámina PLANO 01-05) para un estudio de software a medida.
colors:
  sheet: "#08080c"
  sheet-raised: "#0c0b12"
  sheet-deep: "#060609"
  line: "#2a2733"
  line-soft: "#1b1922"
  paper: "#ffffff"
  muted: "#b4aebe"
  muted-2: "#8d8799"
  violet: "#8a00d6"
  violet-bright: "#a929e8"
  violet-deep: "#6500c8"
  violet-ink: "rgba(169, 41, 232, 0.16)"
  node-tint: "rgba(101, 0, 200, 0.14)"
  white: "#fff"
  black: "#000"
typography:
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(2.9rem, 6.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title-md:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "17px"
    lineHeight: 1.7
  hero-summary:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "clamp(1.02rem, 1.6vw, 1.18rem)"
    lineHeight: 1.65
  project-body:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "15px"
    lineHeight: 1.6
  timeline-detail:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "15px"
    lineHeight: 1.65
  cota:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 800
    letterSpacing: "0.2em"
    textTransform: uppercase
  plate-label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 800
    letterSpacing: "0.24em"
    textTransform: uppercase
  button-label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    letterSpacing: "0.08em"
    textTransform: uppercase
  nav-label:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.08em"
    textTransform: uppercase
  text-link:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 700
  diagram-cota:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "9.5px"
    fontWeight: 800
    letterSpacing: "0.18em"
  diagram-node-label:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.06em"
  chip:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 700
    letterSpacing: "0.1em"
    textTransform: uppercase
  index-label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 800
    letterSpacing: "0.22em"
    textTransform: uppercase
  brand-strong:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 800
    letterSpacing: "0.18em"
  brand-small:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 700
    letterSpacing: "0.34em"
    textTransform: uppercase
  scale:
    cota-diagrama: "9.5px"
    micro: "10px"
    cota: "11px"
    etiqueta: "12px"
    enlace: "13px"
    marca: "14px"
    cuerpo: "15px"
    lede: "17px"
    plus-timeline: "removed"
    title-md: "22px"
rounded:
  square: "0px"
spacing:
  container: "1200px"
  gutter: "48px"
  gutter-narrow: "32px"
  nav-height: "76px"
  section-pad: "118px"
  section-pad-narrow: "88px"
  project-gap: "22px"
  project-pad: "22px 24px 24px"
  button-pad: "12px 24px"
  chip-pad: "4px 9px"
---

# Design System: Neticar

## Overview

**Creative North Star: "El Plano" (violetprint)**

El sitio es una hoja de dibujo técnico negra —lienzo `#08080C`— dibujada en tinta violeta de marca. No es una landing oscura genérica: es un plano de ingeniería donde la prueba se mide, no se atenúa. La gramática es la del dibujo técnico: graticule de 72px, cotas con vértices y flechas, esquineros en las esquinas de los elementos, plate-rules con bloques de rótulo ("Lámina 02 · Perfil") y leyendas PLANO 01..05.

**Key Characteristics:**

- Hoja negra casi plana con tres niveles tonales (`sheet`, `sheet-raised`, `sheet-deep`) en lugar de paneles flotantes.
- Violeta de marca como única voz de color: acentos, cotas, tinta del diagrama.
- Tipografía de rótulo técnica (Montserrat 800, mayúsculas, tracking amplio) para cotas; Open Sans para la lectura.
- Componentes rectos (radio 0), reglas de 1px, esquineros de 3 líneas en lugar de sombras o tarjetas redondeadas.

**La Regla de la Evidencia.** El sistema le da espacio a la prueba —trabajo, recorrido, acción directa—; la decoración nunca compite con ella.

## Colors

Paleta real de `:root` en `app/globals.css`, alineada al manual de marca (`design/design.md`): violetas oficiales `#6500C8` / `#8A00D6` / `#A929E8` sobre negro NETICAR `#08080C`.

### Tokens de hoja (neutros)

| Token | Valor | Uso |
|---|---|---|
| `--sheet` | `#08080C` | Lienzo base (body), fondo de rótulos de lámina |
| `--sheet-raised` | `#0C0B12` | Superficie alterna: secciones elevadas (Perfil, Trabajo) y menú móvil |
| `--sheet-deep` | `#060609` | Superficie profunda: placas de proyecto, Recorrido, Contacto |
| `--line` | `#2A2733` | Regla estructural: bordes de placas, grilla del timeline, chips |
| `--line-soft` | `#1B1922` | Regla silenciosa: separadores amplios, border del header/footer |
| `--paper` | `#FFFFFF` | Texto principal y etiquetas del diagrama |
| `--muted` | `#B4AEBE` | Texto secundario: ledes, descripciones de proyecto |
| `--muted-2` | `#8D8799` | Texto terciario: cotas muted, índices, footer |

### Tokens de tinta violeta

| Token | Valor | Uso |
|---|---|---|
| `--violet` | `#8A00D6` | Violeta central de identidad: bordes, ticks, puntos del timeline |
| `--violet-bright` | `#A929E8` | Acento editorial: frase destacada del headline, líneas draw-in, hover |
| `--violet-deep` | `#6500C8` | Relleno de reposo de botones primarios |
| `--violet-ink` | `rgba(169, 41, 232, .16)` | Tinta del graticule (líneas de 1px cada 72px) |

### Colores literales documentados

- `#fff` / `#FFFFFF` — texto de botones primarios, skip-link, menú móvil (`--paper`); `background: #fff` en `@media print`.
- `#000` — `color: #000` en `@media print`.
- `rgba(101, 0, 200, .14)` — relleno alfa del `--violet-deep` en los nodos del diagrama del hero (`.diagram-node`).
- `rgba(8, 8, 12, .96)` — `--sheet` al 96%: fondo del header fijo.
- `rgba(6, 6, 9, .86)` / `rgba(6, 6, 9, .06)` — `--sheet-deep` en dos alfas: gradiente inferior sobre las imágenes de proyecto.

### Contraste (WCAG, sobre `#08080C`)

| Par | Relación |
|---|---|
| `#FFFFFF` / `#08080C` | 19.99:1 |
| `#B4AEBE` / `#08080C` | 9.27:1 |
| `#8D8799` / `#08080C` | 5.77:1 |
| `#A929E8` / `#08080C` | 3.97:1 (solo cotas y acentos) |
| `#FFFFFF` / `#6500C8` (botón) | 8.80:1 |
| `#FFFFFF` / `#A929E8` (skip-link) | 5.04:1 |

**La Regla de la Tinta Única.** El violeta es acento, no lavado: el campo dominante es la hoja negra y la familia violeta señala acción, énfasis y metadatos técnicos.

## Typography

Fuentes de Google cargadas con `next/font` en `app/layout.tsx`, expuestas como variables CSS:

- `--font-montserrat` — Montserrat, display swap. Titulares, cotas, rótulos, chips, botones (carácter de rótulo técnico: mayúsculas, 800, tracking amplio).
- `--font-open-sans` — Open Sans, display swap. Lectura, navegación, etiquetas de nodo, descripciones (carácter operativo y legible).
- Fallback de ambas: `Arial, sans-serif`.

### Escala

- **Display** (Montserrat 800, `clamp(2.9rem, 6.4vw, 4rem)`, lh 1.02, ls `-.035em`): proposición del hero, `text-wrap: balance`.
- **Headline** (Montserrat 800, `clamp(1.9rem, 3.6vw, 2.75rem)`, lh 1.1, ls `-.03em`): títulos de sección y contacto, `text-wrap: balance`.
- **Title-md** (Montserrat 700, 22px, lh 1.15, ls `-.02em`): títulos de proyecto y de rol en el timeline.
- **Lede** (Open Sans, 17px, lh 1.7, `--muted`, máx. 62ch): párrafos introductorios.
- **Hero-summary** (Open Sans, `clamp(1.02rem, 1.6vw, 1.18rem)`, lh 1.65, `--muted`, máx. 56ch).
- **Project-body / Timeline-detail** (Open Sans, 15px, lh 1.6/1.65, `--muted`).
- **Cota** (Montserrat 800, 11px, ls `.2em`, mayúsculas): metadatos y leyendas de sección; variantes `cota-violet` (`--violet-bright`) y `cota-muted` (`--muted-2`).
- **Plate-label** (Montserrat 800, 11px, ls `.24em`, mayúsculas): rótulo central de los plate-rules ("Lámina 02 · Perfil").
- **Diagram-cota** (Montserrat 800, 9.5px, ls `.18em`, `--muted-2`): cotas dentro del SVG del hero.
- **Button-label** (Montserrat 800, 12px, ls `.08em`, mayúsculas).
- **Nav-label** (Open Sans 700, 12px, ls `.08em`, mayúsculas): navegación desktop y móvil.
- **Text-link** (Open Sans 700, 13px): enlaces secundarios.
- **Chip** (Montserrat 700, 10px, ls `.1em`, mayúsculas): tecnologías del timeline.
- **Index-label** (Montserrat 800, 10px, ls `.22em`, mayúsculas): índice del hero.
- **Brand-strong / Brand-small** (Montserrat 800 14px ls `.18em` / 700 10px ls `.34em`): firma de marca.

**La Regla del Rótulo.** Montserrat mayúscula con tracking amplio comunica medición y rótulo técnico; Open Sans sostiene la lectura. El peso y el tracking cargan el drama; sin fuentes novedosas, cursivas ni exceso de color.

## Design Language

Gramática de dibujo técnico, no de tarjetas.

### Hoja y graticule

- `.sheet` fija el fondo `#08080C`; `.sheet-graticule` superpone una grilla de líneas de 1px en `--violet-ink`, paso de **72px**, opacidad `.5`, enmascarada con un radial `ellipse 90% 80% at 30% 20%` (fade a transparente al 75%). Usada en el hero.
- Esquineros: los elementos "medidos" llevan 3 líneas de esquina —cuadrados de 9px o 14px con dos bordes violeta en esquinas opuestas— en lugar de bordes redondeados (`.project-plate::before/::after`, `.profile-image-wrap::before/::after`).

### Plate-rule (regla de bloque de rótulo)

`.plate-rule` es una regla de título de lámina: dos ticks violeta de 9px x 1px en los extremos, línea de 1px `--line` al medio con **vértices** en ambos extremos (cuadrados de 9px con borde violeta rotados -45°/135°), y el rótulo `.plate-label` centrado sobre fondo `--sheet` (Montserrat 11px 800 ls `.24em` en `--violet-bright`, padding lateral 18px). Separa y rotula secciones; en Trabajo cierra con "Continuación en Lámina 05".

### Botones

- `.button`: min-height 46px, padding `12px 24px`, Montserrat 12px 800 mayúscula, esquinas rectas, transición de 0.2s en background/border/color.
- `.button-primary`: relleno `--violet-deep`, borde `--violet`, texto `#fff`; hover → `--violet`; active → `--violet-deep`.
- `.text-link`: papel con regla inferior de 1px `--muted-2` (padding-bottom 4px, gap 8px), flecha SVG de 13px; hover → `--violet-bright` en texto y regla.

### Cards de proyecto (láminas)

- Placa en `--sheet-deep` con borde 1px `--line`, esquineros violeta de 14px en esquina superior izquierda e inferior derecha.
- Media en `aspect-ratio 16/10` (16/8.2 en las placas anchas), borde inferior `--line-soft`, imagen con `opacity .92` + `contrast(1.02)`, gradiente inferior `--sheet-deep` (86% → 6%) y hover con `opacity 1` + `scale(1.025)`.
- Copia: categoría como cota con cuadrado de 7px `--violet-bright`; título Montserrat 22px que pasa a `--violet-bright` en hover; descripción de 15px `--muted`; acción "Consultar por WhatsApp" como cota violet.

### Hero diagram (SVG)

- Marco rectángulo 480x450, trazo 1px `--line`; diagonal N en `--violet-bright` (2px) y líneas de cota en `--violet` (1.5px) con puntos de vértice (r5).
- Nodos `--violet-deep` al 14% con borde `--violet` 1.5px; etiquetas Open Sans 12px 700 sobre `--paper`; cotas Montserrat 9.5px 800 en `--muted-2`. `aria-hidden` con `role="img"` y `aria-label` descriptivo.

### Timeline (recorrido)

- Línea vertical 1px `--line` a la izquierda; cada entrada con punto de 9px (borde `--violet`, relleno `--violet-bright`), periodo como cota precedida por regla violeta de 12px x 1px.
- **Sin interacción de colapso**: el recorrido nunca es colapsable (pin del usuario). Cada entrada muestra su detalle completo y sus chips de tecnología de 10px Montserrat con borde `--line`, siempre visibles. No hay botones, `hidden` ni animaciones de filas.

## Layout

- Contenedor `.container`: `min(100% - 48px, 1200px)` centrado (gutter 24px por lado); a ≤800px pasa a 32px. Mismo ancho en `.nav-shell`.
- Header fijo de 76px (`z-index 40`), fondo `--sheet` al 96%, borde inferior `--line-soft`; `scroll-padding-top: 82px` en `html`.
- Hero: `min-height: 100svh`, grilla `1.05fr / .95fr` con gap 64px; diagrama `aspect-ratio 1.06`, máx. 520px; índice debajo con separadores de 1px `--line`.
- Secciones: padding vertical 118px, `border-top: 1px solid --line-soft`; `section-raised`/`section-deep` alternan los tres tonos de hoja.
- Proyectos: grilla de **12 columnas** con gap 22px; placas 1-3 en `span 4`, placas 4-5 en `span 6`.
- Recorrido: grilla `minmax(250px, .78fr) / minmax(0, 1.22fr)` gap 72px, intro pegajosa (`top: 128px`).
- Perfil: grilla `minmax(260px, .72fr) / minmax(0, 1.28fr)` gap 76px; imagen 640px en escala de grises con borde `--line`.
- Contacto: centrado, máx. 720px; nota de respuesta con punto de 8px `--violet-bright`.
- Footer: 30px de padding, borde superior `--line-soft`, marca de 30px, contacto "WhatsApp +54 341 263 9357".

### Media queries (sintaxis `max-width` clásica)

- **≤900px**: hero y diagrama a una columna; placas 1-5 a `span 6`; Recorrido y Perfil a una columna (intro deja de ser sticky).
- **≤800px**: secciones a 88px; nav desktop y CTA ocultos; toggle hamburguesa de 44px (3 líneas de 18px x 1px → X al abrir, `aria-expanded`); menú móvil absoluto de 220px en `--sheet-raised` con borde `--line`.
- **≤540px**: grilla de proyectos a 1 columna, media a `16/9`; hero-actions en columna; footer apilado.
- Media queries range de Tailwind v4 no usadas: los breakpoints están escritos con `@media (max-width: …)`.

## Motion

- **Draw-in del diagrama**: `.draw-line` (dasharray/dashoffset 900) y `.draw-line-dim` (600) se dibujan con `draw-in 2.2s / 1.8s cubic-bezier(.65, 0, .35, 1)`, delays `.15s` / `.5s`, `forwards`.
- **Reveal** (`components/Reveal.tsx`): IntersectionObserver (`threshold .12`, `rootMargin 0 0 -40px 0`), sube 18px y funde en 0.55s ease-out; `transitionDelay` en ms escala las entradas en cascada. Sin `IntersectionObserver` → visible inmediato.
- **Hover/estado**: botones, links, nav y títulos de proyecto con transiciones de 0.2-0.35s.
- **Reduced motion** (`prefers-reduced-motion: reduce`): scroll suave apagado, transiciones y animaciones a `.01ms` con 1 iteración, dashoffset a 0 y reveal visible.
- **Sin scripting** (`@media (scripting: none)`): reveal visible sin JS.
- **Print**: header y text-links ocultos, hoja `#fff` con tinta `#000`, secciones con `break-inside: avoid`.

## Components

1. **Navigation** (`components/Navigation.tsx`): header fijo con firma completa oficial `neticar-signature.png` (regla del manual de marca: firma en header; monograma solo cuando no hay espacio —favicon `neticar-mark.png`—), enlaces Perfil / Recorrido / Trabajo / Contacto, CTA "Contacto", menú móvil con foco gestionado (foco al primer link al abrir, Escape lo cierra y devuelve el foco al toggle), `aria-expanded`/`aria-controls`.
2. **Hero** (`components/Hero.tsx`): headline con acento violeta, resumen, CTA primario a `wa.me/543412639357` con texto prefill, link secundario y diagrama SVG animado.
3. **Projects** (`components/Projects.tsx`): Lámina 04 · Trabajo, 5 láminas (Kaza, KazaFitness, ServiCerca, HGFull, Chiquitines) que abren WhatsApp en nueva pestaña con mensaje prefill por proyecto, cierre con plate-rule "Continuación en Lámina 05".
4. **Trajectory** (`components/Trajectory.tsx`): timeline estático con 4 entradas siempre visibles (sin toggle, sin colapso) y chips de tecnologías.
5. **Team** (`components/Team.tsx`): Lámina 02 · Perfil — Tomás Colombo, segunda sección de la página (orden CV: portada, perfil, recorrido, trabajo, contacto).
6. **Contact** (`components/Contact.tsx`): lámina 05 centrada, CTA WhatsApp y nota "Respondo dentro de las 24 horas".
7. **Footer** (`components/Footer.tsx`): firma, WhatsApp +54 341 263 9357, copyright con año dinámico.

## Accessibility

- `lang="es"` en `<html>`; skip-link "Saltar al contenido" → `#contenido` (fijo, entra desde arriba al recibir foco; `#fff` sobre `--violet-bright`, 5.04:1).
- Foco visible: `outline: 2px solid --violet-bright; outline-offset: 5px` en `:focus-visible` de links y botones.
- Diagrama oculto a lectores de pantalla (`aria-hidden`) salvo el `role="img"` + `aria-label` del SVG; menú móvil con label dinámico "Abrir/Cerrar menú" y `aria-expanded`/`aria-controls`.
- Contraste del texto principal: blanco/grises sobre `#08080C` ≥ 5.77:1 (AA para texto normal); violetas de marca reservados a cotas y acentos.
- `prefers-reduced-motion` y `scripting: none` contemplados.

## Contract

- **Roll / dirección:** El Plano (violetprint), dirección "grounded" 1 del roll `c261e412`; la paleta fijada por el usuario prevalece sobre el roll.
- **Verificación:** la key `c261e412` y el contrato de diseño están inyectados como comentario HTML en el documento servido (THESIS / OWN-WORLD / STORY / FIRST VIEWPORT / FORM / FINISH), mediante `dangerouslySetInnerHTML` en `app/layout.tsx` (los comentarios JSX no sobreviven el build de Next).
- **Metadata:** title "Neticar | Software a medida", `locale es_AR`, `themeColor #08080C`, icon `neticar-mark.png`, OG image `/og.png` 1200x630.

## Constraints & Notes

- **Pin del usuario:** "Mantene los colores de neticar q es ese violeta y negro, cambia el diseno de la pagina". Todo el sistema DEBE ceñirse a la paleta de marca: violetas `#6500C8` / `#8A00D6` / `#A929E8` + negro `#08080C` + blancos/grises. Sin colores ajenos.
- `detect.mjs` valida que los colores del código estén documentados en este archivo; por eso están declarados también `#fff`/`#FFFFFF` (skip-link, botones, `@media print`), `#000` (`@media print`) y `rgba(101, 0, 200, .14)` (tinte alfa de `--violet-deep` en los nodos del diagrama).
- **Token sin definir:** `.technology-list span` referencia `--muted-1`, que NO existe en `:root`; la regla queda inválida y hereda el color del padre. Documentado como referencia pendiente, no como token de paleta.
- No introducir WebGL, neon, glassmorphism, sombras ni superficies flotantes; mantener esquinas rectas (radio 0) y reglas de 1px; el violeta es acento, nunca relleno indiscriminado.
- La firma completa (`neticar-signature.png`) es la única variante permitida en header y footer; el monograma se reserva a favicon/íconos (manual de marca §3.2).
