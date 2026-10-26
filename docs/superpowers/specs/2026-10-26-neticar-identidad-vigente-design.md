# Manual de marca e identidad web de Neticar

**Estado:** aprobado por el usuario el 2026-10-26  
**Fecha:** 2026-10-26

## Intención

Crear un manual de marca de Neticar en `design/` y reemplazar en el proyecto local los archivos y estilos que contradicen la identidad vigente de la web publicada. La referencia elegida por el usuario es `http://207.180.192.171/`, que presenta a Tomás Colombo y a Neticar como firma personal.

El sitio público usa una identidad editorial cálida: papel marfil (`#F3ECDD`), tinta casi negra (`#0B0B0B`), ocre (`#D5A52C`), titulares Archivo Black, textos Source Sans 3, monograma tipográfico TC y fotografía personal natural. El sitio local conserva otra dirección (negro, violeta y recursos de plano técnico); el manual local anterior conserva además el nombre “NETICAR DESARROLLOS”. Esos sistemas se consideran obsoletos para esta entrega.

## Objetivos

- Entregar un manual en español, en PDF y con fuente editable, que explique esencia y personalidad, marca y monograma, variantes, área de seguridad, paleta y usos, tipografía, composición, fotografía, recursos gráficos, tono verbal y aplicaciones digitales e impresas.
- Registrar los valores y reglas observables en la web publicada, sin inventar una nueva identidad ni claims comerciales.
- Alinear el sitio Next.js local con esa identidad en las pantallas existentes: navegación, portada, perfil, recorrido, proyectos, contacto y pie.
- Actualizar la identidad técnica del repositorio y retirar el manual, logos y exploraciones de diseño reemplazados.
- Usar la fotografía personal y las piezas de identidad disponibles en la web pública; conservar las capturas que documentan proyectos que solo existen en el portfolio local.

## No objetivos y límites

- No publicar ni desplegar cambios en producción.
- No reescribir datos profesionales, descripciones de proyectos, destinos, canales de contacto ni comportamiento de navegación del sitio local.
- No agregar rutas o integraciones de backend. El proyecto local es una web estática y sus acciones actuales son navegación, enlaces y WhatsApp.
- No alterar los colores propios que aparecen dentro de capturas de productos; son evidencia de cada proyecto, no colores de marca Neticar.
- No generar retratos ficticios ni material que atribuya resultados o testimonios inexistentes.

## Enfoques considerados

1. **Actualizar solo el manual.** Es rápido, pero deja dos identidades incompatibles entre el PDF y el código local. Se descarta porque el pedido incluye limpiar y reemplazar también los archivos y el código de identidad.
2. **Usar la web publicada como autoridad y alinear manual, recursos y código local.** Es el enfoque elegido por el usuario. Conserva la información y el comportamiento del portfolio local, mientras reemplaza su sistema visual, su firma gráfica y las imágenes de identidad que ya no coinciden.
3. **Clonar en el repositorio todo el contenido y la arquitectura de la web pública.** Haría coincidir cada página, pero cambiaría el contenido y el alcance del sitio local. Se descarta: la solicitud es actualizar la identidad, no migrar el portfolio.

## Dirección confirmada

- **Marca verbal:** “Tomás Colombo”; descriptor “Neticar · firma personal”. Evitar la firma antigua “NETICAR DESARROLLOS”.
- **Marca gráfica:** monograma TC en bloque negro y tinta marfil. La firma completa combina el monograma con el nombre y descriptor en texto. El favicon público conserva un subrayado ocre; la cabecera web usa una variante compacta sin subrayado.
- **Colores base:** marfil `#F3ECDD`, marfil claro `#FAF7EF`, negro `#0B0B0B`, negro suave `#27251F`, texto secundario `#5B574D`, texto sobre negro `#C8C1B3`, ocre `#D5A52C`, regla clara `#D8D0BF` y regla oscura `#46433B`. El ocre destaca navegación, acciones y marcas editoriales; no sustituye el negro en texto corriente.
- **Tipografía:** Archivo Black para titulares y la firma; Source Sans 3 para lectura, navegación y controles.
- **Composición:** titulares grandes y compactos, alineación editorial, mucho espacio útil, reglas finas, acentos lineales ocres y botones rectangulares. En portada, la fotografía personal enmarcada en negro con desplazamiento ocre es el recurso principal; se elimina el diagrama violeta de la dirección local anterior.
- **Fotografía:** retrato real ya utilizado en la web pública, de espaldas y en contexto natural; conservar color, encuadre y entorno. No usar el retrato selfie local como imagen principal. Las capturas de proyectos se conservan fieles y sin filtros de color de marca.
- **Voz:** primera persona, clara, cercana y profesional, con voseo argentino y términos técnicos explicados con sencillez.
- **Accesibilidad:** texto legible y contraste AA, foco visible, navegación con teclado y reducción de movimiento. Los acentos ocre no comunican estados por sí solos.

## Superficies y archivos previstos

- **Manual y paquete visual dentro de `design/`:** PDF final, fuente editable del manual, sistema técnico actualizado, favicon/monograma y las imágenes actuales necesarias para reproducir los ejemplos.
- **Web local:** `app/layout.tsx`, `app/globals.css`, `components/Navigation.tsx`, `Hero.tsx`, `Team.tsx`, `Trajectory.tsx`, `Projects.tsx`, `Contact.tsx`, `Footer.tsx` y los activos de identidad utilizados por esas vistas. Mantener los enlaces y el contenido propio del repositorio; aplicar la composición de la web pública y su tratamiento fotográfico.
- **Contexto visual del proyecto:** actualizar `PRODUCT.md` y `DESIGN.md` para que describan el posicionamiento personal, los tokens, las fuentes y los componentes vigentes. Regenerar el sidecar de Impeccable para que no mantenga la paleta reemplazada.
- **Limpieza de `design/`:** retirar el manual previo `manual_marca_neticar.pptx` y su extracto `manual_marca_neticar.ndjson`, el antiguo `design.md`, las variantes de logos violetas, las capturas de esas variantes y las exploraciones `cybernetic_vanguard`, `neticar_home_optimizado` y `shader`. La información útil que corresponda se trasladará al nuevo manual y los archivos maestros actuales.
- **Limpieza de `public/`:** sustituir el retrato local por el publicado y reemplazar icono, firma y tarjeta OG violetas por los activos actuales. Retirar la fotografía huérfana `avril-iocco.png`, que no es de Tomás y no aparece en la web. Mantener los screenshots de los proyectos locales sin correspondencia pública.

## Supuestos de implementación

- El sitio público es la fuente de identidad; el proyecto Next.js local es el destino de la alineación.
- Durante la integración, `origin/main` avanzó e incorporó `/cv` antes de este commit. Esta entrega conserva esa ruta upstream y la documenta como aplicación de marca, sin crearla ni modificarla.
- `design/` quedará con una sola versión vigente del manual y los recursos de marca reutilizables; no se conservarán duplicados visuales de los conceptos reemplazados.
- No existe un backend asociado ni contrato API que participe en esta web; por eso no corresponde crear o modificar un `documentacion.md` de backend.

## Revisión antes de cerrar

- Abrir el PDF en sus páginas inicial, intermedias y final; renderizar todas las páginas y revisar legibilidad, márgenes, imágenes y numeración.
- Revisar el sitio local en escritorio y móvil, cotejándolo con la dirección visual pública; comprobar que las rutas, destinos y contenido se mantienen.
- Ejecutar una pasada del detector de Impeccable sobre los archivos de interfaz modificados y corregir hallazgos mecánicos.
- No agregar ni ejecutar suites de pruebas; la revisión solicitada es visual y documental.

## Decisiones que quedan para quien implementa

- La paginación final del manual, dentro de un índice breve y capítulos que cubran todos los objetivos.
- El encuadre responsive del retrato y la adaptación de los layouts existentes a cada ancho.
- Los nombres finales de los archivos nuevos dentro de `design/`, usando nombres descriptivos y consistentes.
