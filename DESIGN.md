---
name: Tomás Colombo / Neticar
description: Presentación personal, CV y portfolio de Tomás Colombo. Neticar funciona como firma personal. Afiche editorial en dos tintas (marfil de día, tinta cálida de noche) con ámbar como señal y un campo de conceptos animado en la portada.
colors:
  light:
    bg: "#F3ECDD"
    bg-raised: "#FAF7EF"
    fg: "#0B0B0B"
    muted: "#5B574D"
    accent: "#D5A52C"
    line: "#D8D0BF"
    block: "#0B0B0B"
    on-block: "#F3ECDD"
    on-block-muted: "#C8C1B3"
    line-on-block: "#46433B"
  dark:
    bg: "#0F0E0C"
    bg-raised: "#161512"
    fg: "#F3ECDD"
    muted: "#A39C8E"
    accent: "#E8B43A"
    line: "#2E2B26"
    block: "#1B1916"
    on-block: "#F3ECDD"
    on-block-muted: "#A39C8E"
    line-on-block: "#38342D"
  products:
    whatplan: { surface: "#121112", ink: "#FFFAF0", accent: "#FF6049", second: "#D4EF55" }
    notes: { surface: "#F1F2F3", ink: "#14171A", accent: "#6451A8" }
    scalegrams: { surface: "#0A0F0C", ink: "#EEF2EC", accent: "#C3EA17" }
    avianto: { surface: "#F5F5FA", ink: "#171728", accent: "#30348B", red: "#E52528" }
typography:
  display: "Archivo Black, Impact, sans-serif"
  body: "Source Sans 3, Arial, sans-serif"
  mono: "JetBrains Mono, ui-monospace, monospace"
  product-covers: "Changa One (WhatPlan), Archivo expandida (Notes), Inter Tight (ScaleGrams), Outfit (Avianto)"
spacing:
  container: "1320px"
  header-height: "72px"
---

# Sistema de diseño: Tomás Colombo / Neticar

## Enfoque

La web es una presentación profesional en primera persona: Tomás Colombo ocupa el primer plano y Neticar aparece como su firma. Explica quién es, cómo llegó hasta acá, qué hace en su trabajo y en la facultad, y qué productos construyó.

## Dirección visual

**Afiche editorial en dos tintas.** Titulares de presencia, bloques de tinta, reglas finas, sombras desplazadas y trama de papel sutil. De día es marfil con tinta negra; de noche, tinta cálida con texto marfil. El ámbar es la señal en ambos: rótulos, acciones, sellos y el resaltado del campo de conceptos.

Consultar `IDENTIDAD-DE-MARCA.md` para voz y usos, y `design/manual-de-marca-neticar.html` (con su PDF) para el manual completo.

## Color y tema

Todos los colores son variables CSS en `app/globals.css`. Los componentes usan solo variables, nunca colores sueltos, para que funcionen en los dos temas.

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--bg` | `#F3ECDD` | `#0F0E0C` | Fondo general |
| `--bg-raised` | `#FAF7EF` | `#161512` | Sección Trabajo |
| `--fg` | `#0B0B0B` | `#F3ECDD` | Texto principal, marcos y sombras desplazadas |
| `--muted` | `#5B574D` | `#A39C8E` | Texto secundario |
| `--accent` | `#D5A52C` | `#E8B43A` | Rótulos, acciones, sellos |
| `--line` | `#D8D0BF` | `#2E2B26` | Separadores |
| `--block` | `#0B0B0B` | `#1B1916` | Secciones Recorrido y Contacto, franja móvil |

- El tema sigue `prefers-color-scheme`. El botón Claro/Oscuro fija `data-theme` en `<html>` y lo guarda en `localStorage` (`neticar-theme`). Un script en `<head>` lo aplica antes de pintar.
- Texto sobre ámbar siempre en `--accent-text` (tinta). Ámbar sobre marfil no sirve para texto ni controles.
- El CV (`/cv`) se mantiene en papel claro en ambos temas.

## Tipografía

- **Archivo Black:** nombre, titulares, títulos de tarjetas y la presentación personal de Recorrido.
- **Source Sans 3:** lectura, navegación, etiquetas y CV.
- **JetBrains Mono:** texto rotativo de la portada, etiquetas del campo de conceptos, contadores y leyendas técnicas.
- Las portadas de producto usan la tipografía de cada marca y no se usan en otro lugar.

## Estructura de la página

1. **Portada (01 / Perfil):** nombre animado letra por letra, subtítulo, texto rotativo ("Construyo…"), acciones (Ver mi trabajo, Ver CV, Contacto), franja de tres datos y retrato con sello giratorio. Detrás, el campo de conceptos. Debajo, índice y franja inclinada con áreas de trabajo.
2. **02 / Recorrido** (bloque oscuro): presentación personal a todo el ancho, cuatro rasgos (Aprendo, Construyo, Mejoro, Comparto) y la cronología horizontal: Politécnico → MangooDev → CISB y Tecnicatura en paralelo → Licenciatura en Aplicaciones de IA (UNR), que continúa solo desde la Tecnicatura. En pantallas de menos de 980px pasa a vertical.
3. **03 / Trabajo** (marfil elevado): filas ordenadas por peso, cada una con su encabezado fijo a la izquierda: productos propios (4 portadas), CISB (8 tarjetas con descripción y tecnologías), Tecnicatura (4 trabajos con ilustración) y pasantía (2 tarjetas). Cierra con "Otros trabajos".
4. **04 / Contacto** (bloque oscuro): WhatsApp, correo con botón Copiar y enlace al CV.

## Campo de conceptos (portada)

`components/EmbeddingField.tsx`. Canvas detrás de la portada que representa conceptos agrupados por significado.

- Mide el texto, los botones, la franja de datos, la foto y el sello, y no dibuja nunca debajo de ellos.
- Cada grupo (productos, backend, IA, frontend, datos) toma su propia zona libre y se reparte según su forma: a lo alto en zonas angostas, a lo ancho en zonas anchas. En pantallas chicas puede faltar algún grupo si no hay lugar.
- Suma una trama sin palabras (puntos finos y nodos medianos enlazados) en todo el espacio libre.
- Reacciona al cursor: los nodos cercanos se acercan y se conectan con líneas ámbar.
- Lee los colores del tema activo y se recalcula al cambiar el tamaño, el tema o al terminar de cargar las fuentes.

## Portadas de producto

Cada portada usa el fondo, el acento y la tipografía de su marca, su logo oficial (o ícono + nombre si no hay wordmark), el lema de su landing y una captura actual de la landing dentro de un marco de navegador inclinado. Las capturas viven en `public/images/projects/*-landing.jpg` (copias maestras en `design/assets/projects/*-landing.png`) y los logos en `public/images/brands/`. Renovarlas cuando cambie una landing.

## Movimiento

Nombre letra por letra, retrato que se descubre, sello giratorio, franja que se desplaza, texto rotativo, campo de conceptos, ilustraciones animadas en las tarjetas, inclinación de portadas y desplazamiento suave al entrar en pantalla (`.rv`, solo transform). Todo es decorativo: con `prefers-reduced-motion` se apaga y el contenido siempre está visible.

## Accesibilidad

- `lang="es"`, enlace para saltar al contenido, foco visible (contorno tinta y halo ámbar).
- El nombre animado tiene `aria-label`; el texto rotativo se anuncia completo con un texto oculto; ilustraciones y canvas con `aria-hidden`.
- Botón de tema con `aria-pressed`; copiar correo y compartir CV anuncian el resultado.
- Contraste AA en ambos temas para texto y controles.

## CV

`/cv` presenta un documento semántico con **Compartir** (menú del dispositivo o copia del enlace) e **Imprimir / Guardar como PDF**. Incluye perfil, experiencia, formación (con los trabajos prácticos de la Tecnicatura y la Licenciatura como próximo paso), tecnologías y productos propios. En impresión pasa a A4, fondo blanco y sin barra de acciones.
