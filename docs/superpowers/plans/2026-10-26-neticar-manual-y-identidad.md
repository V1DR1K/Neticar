# Manual de marca e identidad vigente de Neticar — Plan de implementación

> **Para agentes de implementación:** SUB-SKILL REQUERIDA: usar `superpowers:subagent-driven-development` o `superpowers:executing-plans` para implementar este plan tarea por tarea. Marcar cada paso con `[ ]` al ejecutarlo.

**Goal:** Crear en `design/` un manual de marca PDF editable y alinear la web local de Neticar con la identidad de la web publicada.

**Architecture:** Mantener la aplicación Next.js existente y reemplazar sus tokens, recursos y composición visual por la identidad publicada. Documentar esa identidad en `PRODUCT.md`, `DESIGN.md` y `design/design.md`; generar el PDF desde una fuente editable con ReportLab.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, `next/font/google`, Python y ReportLab.

**Spec:** `docs/superpowers/specs/2026-10-26-neticar-identidad-vigente-design.md`

## Global Constraints

- Fuente visual elegida: web publicada `http://207.180.192.171/`.
- Marca verbal: “Tomás Colombo”; descriptor “Neticar · firma personal”.
- Paleta base: `#F3ECDD`, `#FAF7EF`, `#0B0B0B`, `#27251F`, `#5B574D`, `#C8C1B3`, `#D5A52C`, `#D8D0BF`, `#46433B`.
- Tipografías: Archivo Black para titulares y firma; Source Sans 3 para lectura, navegación y controles.
- Mantener contenido, enlaces y comportamiento del sitio local. No agregar rutas ni backend; no desplegar.
- Reemplazar el retrato de identidad local con el retrato publicado; preservar capturas de proyectos locales sin correspondencia pública y no teñir capturas de producto.
- Entregar manual PDF en español y su fuente editable dentro de `design/`.
- Mantener navegación por teclado, foco visible, movimiento reducido y contraste AA.
- No agregar ni ejecutar pruebas automatizadas; la revisión será visual y documental.

## Review Focus

- **Móvil estrecho:** el título, resumen y CTA deben caber sin desbordamiento; conservar la foto pública en su encuadre natural; revisar a 390 px.
- **Tipografía:** las fuentes deben cargarse desde el proyecto y el fallback debe conservar legibilidad; revisar titular, cuerpo y etiquetas.
- **Contenido extenso en español:** ningún botón ni etiqueta debe desbordarse o quedar cortado en el CV/recorrido y en tarjetas de proyectos.
- **Capturas de proyectos:** conservar los colores propios y asegurar que cada imagen local tenga una ruta válida.
- **Fondo claro y sección oscura:** revisar contraste de texto, enlaces, líneas y controles en ambos fondos.

---

### Task 1: Incorporar activos vigentes de identidad

**Files:**
- Create: `design/assets/favicon.svg`
- Create: `design/assets/og-personal.png`
- Create: `design/assets/retrato-tomas-colombo.png`
- Create: `design/assets/projects/whatplan-current.png`
- Create: `design/assets/projects/notes-current.png`
- Create: `design/assets/projects/scalegrams-current.png`
- Create: `design/assets/projects/avianto-current.png`
- Create: `design/assets/fonts/` (Archivo Black y Source Sans 3 para el PDF)
- Modify/replace: `public/favicon.svg`, `public/og-personal.png`, `public/images/tomas-colombo-profile-2026.png`, screenshots vigentes en `public/images/`
- Remove after references are updated: `public/images/neticar-mark.png`, `public/images/neticar-signature.png`, `public/images/logo-icon.png`, `public/og.png`, `public/images/avril-iocco.png`, `public/images/project-kazafitness.png`, `public/images/project-whatplan-{devices,home,movies,place,visit}.png` y `public/images/project-motorcom-{dashboard,devices,main,profiles,service-sheet}.png`.

**Interfaces:**
- Consumes: los recursos públicos actuales `favicon.svg`, `og-personal.png` y `images/tomas-colombo-profile-2026.png`.
- Produces: marca TC, tarjeta social, retrato y capturas actuales de WhatPlan, Notes, ScaleGrams y Avianto en rutas locales estables; fuentes de escritorio compatibles con ReportLab.

- [x] Descargar desde el sitio público el favicon, la tarjeta social, el retrato y las capturas actuales de WhatPlan, Notes, ScaleGrams y Avianto; guardar copias editoriales en `design/assets/` y recursos web en `public/`.
- [x] Confirmar dimensiones, formato y nombre de cada archivo; inspeccionar visualmente monograma, tarjeta social y retrato.
- [x] Preparar fuentes Archivo Black y Source Sans 3 en formato embebible para ReportLab, con sus nombres de familia preservados.

### Task 2: Alinear componentes y metadatos del sitio

**Files:**
- Modify: `app/layout.tsx`
- Modify: `components/Navigation.tsx`
- Modify: `components/Hero.tsx`
- Modify: `components/Team.tsx`
- Modify: `components/Trajectory.tsx`
- Modify: `components/Projects.tsx`
- Modify: `components/Contact.tsx`
- Modify: `components/Footer.tsx`
- Modify: `components/Reveal.tsx` only if needed for reduced-motion parity

**Interfaces:**
- Consumes: activos de Task 1.
- Produces: markup semántico con firma TC, portada fotográfica, perfil y secciones con clases de presentación explícitas; metadata `es_AR`, dominio canónico `https://neticar.com.ar`, favicon y OG vigentes.

- [x] Cambiar imports de fuente a `Archivo_Black` y `Source_Sans_3` con variables `--font-display` y `--font-body`.
- [x] Actualizar título, descripción, Open Graph, metadata base, idioma y color del navegador según la web publicada.
- [x] Reemplazar el logo viejo del header/footer por el monograma TC y el lockup textual “Tomás Colombo / Neticar · firma personal”.
- [x] Cambiar el SVG de plano del hero por el retrato público enmarcado; conservar texto, CTA y enlaces locales.
- [x] Replantear la sección de perfil y las demás secciones para usar la composición del sitio publicado, manteniendo sus datos y destinos actuales.
- [x] Mantener todos los proyectos propios del sitio local; usar capturas vigentes publicadas cuando exista correspondencia exacta y preservar las demás.
- [x] Confirmar en código que no quedan referencias activas al logo violeta, diagrama técnico, nombre “NETICAR DESARROLLOS” ni tokens de la hoja violeta.

### Task 3: Sustituir el sistema visual local

**Files:**
- Modify: `app/globals.css`
- Modify: componentes de Task 2 si el nuevo sistema requiere clases de presentación específicas

**Interfaces:**
- Consumes: estructura semántica de Task 2.
- Produces: hoja clara, secciones oscuras de apoyo, contraste, tipografía, botones, navegación, recursos ocre, responsive y estados de movimiento del sistema público.

- [x] Reemplazar variables violetas y de plano por los tokens exactos de la web publicada.
- [x] Aplicar escala tipográfica, marcos fotográficos, líneas, controles y tratamientos de proyecto de la identidad confirmada.
- [x] Especificar comportamiento responsive, `:focus-visible` y `prefers-reduced-motion` sin cambiar destinos ni semántica.
- [x] Cotejar el resultado en escritorio y en móvil frente a la web pública; corregir overflow, contraste y recortes antes de continuar.

### Task 4: Escribir el sistema vigente y crear el manual

**Files:**
- Modify: `PRODUCT.md` (compromisos y posicionamiento actuales)
- Modify: `DESIGN.md` (tokens y reglas de interfaz actuales)
- Create/replace: `design/design.md` (manual técnico breve de identidad vigente)
- Create: `design/manual-de-marca-neticar.pdf`
- Create: `design/manual-de-marca-neticar.html` (fuente editable)
- Create: `design/assets/` (ejemplos usados dentro del manual)
- Modify: `.impeccable/design.json` (sidecar sincronizado con el sistema vigente)

**Interfaces:**
- Consumes: identidad real validada en código y activos de Task 1.
- Produces: manual de aproximadamente 10–12 páginas y documentación sincronizada con el sitio.

- [x] Actualizar `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json` y `design/design.md` con posicionamiento personal, tokens y reglas exactas de la fuente pública.
- [x] Generar el PDF con ReportLab siguiendo capítulos de esencia, firma, variantes/área de seguridad, paleta, tipografía, composición, fotografía, voz, aplicaciones y control de calidad.
- [x] Incluir en el manual vistas de la marca actuales, ejemplos de contraste y usos incorrectos basados en el sistema reemplazado.
- [x] Mantener la fuente editable en HTML y los recursos necesarios en `design/assets/`.
- [x] Renderizar todas las páginas del PDF a PNG y revisar portada, páginas internas, tablas, saltos, márgenes, caracteres españoles y numeración.

### Task 5: Retirar exploraciones y archivos de identidad reemplazados

**Files:**
- Remove after verifying no references: `design/cybernetic_vanguard/`, `design/logos/`, `design/neticar_home_optimizado/`, `design/shader/`
- Remove: carpetas de capturas antiguas `design/neticarlogo.png/`, `neticarlogoblangonobg.png/`, `neticarlogonegro.png/`, `neticarlogonegronobg.png/`, `neticarlogosinnombre.png/`, `neticarlogosinnombrenobg.png/`
- Remove: `design/manual_marca_neticar.pptx`, `design/manual_marca_neticar.ndjson`

**Interfaces:**
- Consumes: PDF y assets de Tasks 1 y 4; referencias activas del sitio de Tasks 2 y 3.
- Produces: `design/` con una sola identidad vigente y los recursos necesarios para su mantenimiento.

- [x] Antes de borrar, listar los destinos resueltos y comprobar que están dentro de `design/` o son activos expresamente identificados en este plan.
- [x] Buscar referencias activas a cada recurso a retirar; actualizar cualquier referencia antes de eliminarlo.
- [x] Retirar solo los archivos y carpetas enumerados en este plan; conservar imágenes de proyectos sin equivalente público.
- [x] Verificar que `design/` contiene el nuevo manual, su fuente y los activos actuales.

### Task 6: Revisión final acotada

**Files:**
- Verify: archivos de Task 1–5
- Screenshots: `tmp/brand-review/desktop.png`, `tmp/brand-review/mobile.png`

**Interfaces:**
- Consumes: sistema implementado y PDF final.
- Produces: evidencia visual de web y PDF, más un detector de interfaz sin hallazgos mecánicos pendientes.

- [ ] Abrir el sitio local y capturar escritorio y móvil en la misma ronda visual; revisar portada, perfil, proyectos y contacto.
- [ ] Corregir en un solo lote los defectos materiales observados y confirmar con una última ronda de capturas.
- [ ] Ejecutar una sola vez el detector de Impeccable sobre los targets cambiados y resolver sus hallazgos mecánicos.
- [ ] Abrir el PDF final renderizado y confirmar que todas sus páginas se leen y corresponden a los activos vigentes.
- [ ] Buscar `#08080C`, `#8A00D6`, `#A929E8`, `Montserrat`, `Open Sans`, `neticar-signature.png` y `neticar-mark.png` en código activo y documentos vigentes; no deben persistir como identidad primaria.
