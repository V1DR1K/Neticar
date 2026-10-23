---
name: Tomás Colombo / Neticar
description: Presentación personal y portfolio de Tomás Colombo. Neticar funciona como firma personal. Sistema editorial tipo afiche impreso, con marfil, tinta negra y ámbar.
colors:
  paper: "#F3ECDD"
  paper-raised: "#FAF7EF"
  ink: "#0B0B0B"
  muted: "#5B574D"
  amber: "#D5A52C"
  line: "#D8D0BF"
typography:
  display: "Archivo Black, Impact, sans-serif"
  body: "Source Sans 3, Arial, sans-serif"
spacing:
  container: "1200px"
  header-height: "78px"
---

# Sistema de diseño: Tomás Colombo / Neticar

## Enfoque

La web es una presentación profesional en primera persona: Tomás Colombo ocupa el primer plano y Neticar aparece como su firma. El recorrido explica quién es, cómo llegó hasta aquí, qué viene aprendiendo y qué soluciones ha construido junto a otras personas y en productos propios.

## Dirección visual

**Afiche editorial autobiográfico.** Retrato reconocible, titulares de presencia, márgenes generosos, bloques de tinta, reglas finas y trama de papel sutil. Los tres productos personales —WhatPlan, Notes y ScaleGrams— tienen el mismo nivel de atención.

La paleta anterior negra y violeta pertenece al sistema histórico de Neticar y no gobierna este rediseño. Consultar `IDENTIDAD-DE-MARCA.md` para usos, voz, ejemplos y mantenimiento.

## Color y contraste

| Token | Valor | Uso |
|---|---|---|
| `--paper` | `#F3ECDD` | Fondo general |
| `--paper-raised` | `#FAF7EF` | Superficie alterna y piezas |
| `--ink` | `#0B0B0B` | Texto principal y bloques oscuros |
| `--muted` | `#5B574D` | Texto secundario sobre papel |
| `--muted-on-ink` | `#C8C1B3` | Texto secundario sobre tinta |
| `--amber` | `#D5A52C` | Marcadores, reglas y fondos de acción |
| `--line` | `#D8D0BF` | Separadores en superficies claras |
| `--line-on-ink` | `#46433B` | Separadores en superficies oscuras |

Usar texto negro sobre marfil o ámbar. Ámbar sobre marfil no sirve para texto ni controles. Foco visible negro con halo ámbar. En la impresión del CV, usar papel blanco y texto negro.

## Tipografía

- **Archivo Black:** nombre, titulares y títulos cortos; escala grande y frases breves.
- **Source Sans 3:** párrafos, navegación, etiquetas y CV.
- **Fallbacks:** Impact/sans-serif para display y Arial/sans-serif para lectura.

## Composición y componentes

- Contenedor máximo de `1200px`, con márgenes fluidos y secciones amplias.
- Header claro con el nombre de Tomás; Neticar como firma secundaria.
- Portada a dos columnas: relato y enlaces junto al retrato tratado en blanco y negro, bloque de tinta y sello ámbar.
- Perfil, recorrido, proyectos y contacto en ese orden; cada etapa del recorrido queda siempre visible.
- Proyectos en placas rectangulares con borde negro y pequeño desplazamiento de tinta al pasar el puntero. En pantallas chicas se apilan en una columna.
- Trama de papel casi imperceptible; sin grillas técnicas, neón, sombras flotantes ni estética noir.
- Animaciones breves y prescindibles. `prefers-reduced-motion` las apaga y el contenido no depende de ellas.

## Accesibilidad

- `lang="es"`, enlace para saltar al contenido, navegación de teclado y foco visible.
- Contraste AA para contenido principal y controles; no comunicar estado solo por color.
- Menú móvil con `aria-expanded`, `aria-controls`, cierre por Escape y foco dirigido al abrir.
- Cambios de movimiento respetan `prefers-reduced-motion`.
- Las piezas de muestra de Notes y ScaleGrams usan datos ficticios y deben conservar la leyenda de muestra.

## CV

La ruta `/cv` presenta un documento semántico con una acción **Imprimir / Guardar como PDF**. En pantalla mantiene la identidad marfil/negro/ámbar; en papel cambia a A4, fondo blanco, contenido oscuro y enlaces conservados. No se publican campos sin confirmar.
