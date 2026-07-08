---
name: Cybernetic Vanguard
colors:
  surface: '#131317'
  surface-dim: '#131317'
  surface-bright: '#39393e'
  surface-container-lowest: '#0e0e12'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#2a292e'
  surface-container-highest: '#353439'
  on-surface: '#e4e1e8'
  on-surface-variant: '#d1c1d7'
  inverse-surface: '#e4e1e8'
  inverse-on-surface: '#303035'
  outline: '#9a8ca0'
  outline-variant: '#4e4354'
  surface-tint: '#e2b5ff'
  primary: '#e2b5ff'
  on-primary: '#4d007a'
  primary-container: '#8a00d6'
  on-primary-container: '#e9c5ff'
  inverse-primary: '#8f10da'
  secondary: '#d6baff'
  on-secondary: '#430089'
  secondary-container: '#6603c9'
  on-secondary-container: '#ceadff'
  tertiary: '#e8b3ff'
  on-tertiary: '#500074'
  tertiary-container: '#9000cc'
  on-tertiary-container: '#eec3ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f3daff'
  primary-fixed-dim: '#e2b5ff'
  on-primary-fixed: '#2f004d'
  on-primary-fixed-variant: '#6e00ab'
  secondary-fixed: '#ecdcff'
  secondary-fixed-dim: '#d6baff'
  on-secondary-fixed: '#280056'
  on-secondary-fixed-variant: '#6000bf'
  tertiary-fixed: '#f6d9ff'
  tertiary-fixed-dim: '#e8b3ff'
  on-tertiary-fixed: '#310049'
  on-tertiary-fixed-variant: '#7200a3'
  background: '#131317'
  on-background: '#e4e1e8'
  surface-variant: '#353439'
  lavender-mist: '#F5EEFC'
  text-gray: '#666170'
  pure-white: '#FFFFFF'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  subtitle:
    fontFamily: Open Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system embodies a **Futuristic & Technological** aesthetic that balances high-end innovation with functional clarity. The personality is defined by a "Deep Space" digital environment—utilizing high-contrast surfaces and neon-tinted accents to evoke a sense of precision and evolution.

The visual direction follows a **Glassmorphism / Modern Corporate hybrid** style. It uses translucent layers, backdrop blurs, and vibrant gradients to create depth without clutter. The interface should feel like a high-tech dashboard: responsive, stable, and meticulously organized. Heavy emphasis is placed on "Dark Mode" as the primary experience to maximize the impact of the violet luminescence, while "Light Mode" provides a clean, professional alternative using soft lavender washes.

## Colors

The palette is anchored by **Deep Black (#08080C)**, providing a void-like canvas for the **Violet (#8A00D6)** brand color to pop. 

- **Primary & Gradients:** The core identity is expressed through a three-point violet gradient. Use the full gradient for primary actions, branding elements, and progress indicators.
- **Surface Strategy:** In dark mode, use levels of black and deep violet-tinted greys for container depth. In light mode, the primary surface is **Pure White**, with **Lavender Soft (#F5EEFC)** used for secondary sections and subtle grouping.
- **Functional Use:** Violet is a high-energy accent. It should be used for interactive elements and critical focus points, never for large blocks of body text.

## Typography

The typographic system pairs the geometric strength of **Montserrat** for headlines with the highly legible, humanist qualities of **Open Sans** for interface and body copy.

- **Headlines:** Use Montserrat Bold or ExtraBold. In tech-heavy layouts, use tight letter-spacing for large displays to create a "locked-in" professional look.
- **Body:** Open Sans is used for all reading experiences. Maintain a minimum of 16px for accessibility.
- **Labels:** Small labels and descriptors should often use uppercase with increased letter spacing to mirror the "DESARROLLOS" portion of the logo, adding a technical, architectural feel.

## Layout & Spacing

The layout follows a **Fluid Grid** philosophy with a disciplined 8px base unit. 

- **Grid:** Use a 12-column grid for desktop with 24px gutters. Elements should align strictly to these columns to reinforce the "Structure and Stability" brand pillar.
- **Margins:** Desktop margins should be a minimum of 48px, while mobile margins scale down to 16px.
- **Rhythm:** Use generous vertical whitespace (64px+) between major sections to prevent the tech-heavy visuals from feeling cluttered.
- **Adaptive Rules:** On mobile, complex side-by-side components reflow into a single-column stack. Hidden sidebars should be used for navigation to keep the main viewport clean.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layering** and **Glassmorphism**.

- **Surfaces:** In Dark Mode, the background is #08080C. Elevated cards use a slightly lighter grey-black with a 1px semi-transparent border (10% white) to define edges.
- **Glass Effects:** Overlays, modals, and navigation bars use a backdrop-blur (12px to 20px) with a 60% opacity fill of the surface color. This creates a "frosted tech" appearance.
- **Shadows:** Avoid heavy black shadows. Instead, use "Luminous Shadows"—soft, diffused violet glows (#8A00D6 at 15-20% opacity) behind primary buttons and active states to simulate light emission from the interface.

## Shapes

The shape language is **Rounded (Level 2)**, creating a "friendly precision" that softens the technical edge of the design.

- **Standard Components:** Buttons, inputs, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Main content areas or featured sections use a 1rem (16px) radius.
- **Accents:** The circular point from the monogram should be echoed in iconography and status indicators, using 100% roundness (pill/circle).

## Components

### Buttons
- **Primary:** Full gradient background (#6500C8 to #A929E8). White text. Soft violet drop-shadow on hover.
- **Secondary (Glass):** Semi-transparent background with a 1px solid violet border. Backdrop-blur enabled. 
- **Tertiary:** Ghost style; text only in violet with an underline appearing on hover.

### Input Fields
- Dark background with a subtle 1px border. On focus, the border transitions to the primary violet and gains a faint external glow. Labels should use the `label-caps` typography style.

### Cards
- Use "sutile gradient borders" where a 1px stroke uses the brand gradient. 
- In dark mode, cards have a 5% white overlay to separate them from the pure black background.

### Chips & Tags
- Pill-shaped. Use Lavender Soft (#F5EEFC) with Violet text in light mode, or Deep Violet backgrounds with white text in dark mode.

### Progress & Loading
- Always use the linear gradient for progress bars. Loading states should utilize a "pulsing" violet glow effect.