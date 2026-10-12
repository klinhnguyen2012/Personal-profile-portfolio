# DESIGN.md

Design guideline for Linh's interactive portfolio. This document translates the approved direction in [`docs/superpowers/specs/BRIEF.md`](docs/superpowers/specs/BRIEF.md) into reusable visual and interaction rules.

## 1. Product and design intent

- **Audience:** Recruiters and hiring managers considering Linh for Product Manager or Business Analyst roles.
- **Primary task:** Understand Linh's profile, scan her skills and tools, review projects in the original order, then contact her.
- **Personality:** Editorial, thoughtful, curious, and creatively confident.
- **Visual principle:** Make the content feel curated and easy to scan. Use expressive typography and a few strong images; avoid dense collages, tiny captions, and decoration that competes with evidence.
- **Content language:** English.
- **Portfolio order:** Cover → Who is Linh? → Learn → Innovate → Network → Horizon. Keep project order within each section as shown in the supplied portfolio images.

## 2. Visual foundations

### Color palette

Use warm paper, charcoal, and vermilion as the core identity. Keep bright colors for small accents and project imagery.

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#F5F1E8` | Main page background |
| `surface` | `#FFFEFA` | Cards and readable content panels |
| `ink` | `#191919` | Main text and dark sections |
| `ink-soft` | `#45423E` | Secondary headings and dark surfaces |
| `muted` | `#68645D` | Supporting text on light backgrounds |
| `line` | `#D8D1C6` | Borders, dividers, and rules |
| `vermilion` | `#C83B2B` | Accent text, primary actions, active navigation |
| `vermilion-bright` | `#F04B35` | Large decorative marks and imagery accents only |
| `gold` | `#E9B949` | Small metadata or award details, never long text |
| `white` | `#FFFFFF` | Text on dark/accent surfaces |

Use `ink` or `vermilion` for text on `paper` and `surface`. Use white text on `ink` and `vermilion`. Do not use `vermilion-bright` or `gold` for small text on light backgrounds. Color is never the only way to communicate state or category.

### Three-layer token model

Keep raw values, purpose, and component styling separate. Components should consume semantic or component tokens rather than hard-coded colors.

```css
:root {
  /* Primitive */
  --primitive-paper: #f5f1e8;
  --primitive-surface: #fffefa;
  --primitive-ink: #191919;
  --primitive-ink-soft: #45423e;
  --primitive-muted: #68645d;
  --primitive-line: #d8d1c6;
  --primitive-vermilion: #c83b2b;
  --primitive-vermilion-bright: #f04b35;
  --primitive-gold: #e9b949;

  /* Semantic */
  --color-page: var(--primitive-paper);
  --color-surface: var(--primitive-surface);
  --color-text: var(--primitive-ink);
  --color-text-muted: var(--primitive-muted);
  --color-border: var(--primitive-line);
  --color-accent: var(--primitive-vermilion);
  --color-accent-decorative: var(--primitive-vermilion-bright);
  --color-inverse: var(--primitive-surface);
  --color-inverse-surface: var(--primitive-ink);

  /* Component */
  --button-primary-bg: var(--color-accent);
  --button-primary-fg: var(--color-inverse);
  --card-bg: var(--color-surface);
  --card-border: var(--color-border);
  --focus-ring: var(--color-accent);
}
```

### Typography

Use one expressive condensed display face and one highly readable sans-serif. Prefer locally bundled or stable web fonts with broad Latin and Vietnamese glyph coverage if Vietnamese content is later added.

- **Display:** Condensed, heavy sans-serif for section titles and short hero statements. Use sparingly; avoid long paragraphs in this face.
- **Body:** Neutral sans-serif with open letterforms for descriptions, captions, and controls.
- **Accent script:** Optional, limited to a short name or decorative word. Never use it for navigation, project details, or essential information.
- **Numerals:** Use tabular or clearly shaped numerals for section numbers and metrics.

Recommended responsive type scale (clamp between the bounds):

| Role | Size |
| --- | --- |
| Hero display | `clamp(3.5rem, 11vw, 9rem)` |
| Section display | `clamp(2.75rem, 7vw, 6rem)` |
| Project title | `clamp(1.75rem, 3.4vw, 3rem)` |
| Heading | `clamp(1.35rem, 2vw, 1.75rem)` |
| Body | `1rem` to `1.125rem` |
| Caption / metadata | `0.8125rem` minimum; use `0.875rem` where space allows |

Body line height should be `1.55–1.7`; heading line height should be `0.95–1.15`. Keep body copy to a readable measure of about 60–75 characters per line.

## 3. Layout and spacing

- Use a centered content frame with a maximum width around `80rem` and fluid side gutters: `clamp(1.25rem, 5vw, 5rem)`.
- Use a 12-column grid on wide screens, 6 columns on tablet, and a single column on mobile.
- Base spacing on a 4px rhythm. Common steps: `4, 8, 12, 16, 24, 32, 48, 64, 96` pixels.
- Separate major portfolio sections with generous vertical space (`clamp(5rem, 12vw, 10rem)`). Use consistent section labels and numbering.
- Align imagery, text, and metadata to the same grid. Avoid arbitrary overlaps that reduce legibility.
- Keep sticky navigation compact and ensure anchor targets account for its height.

## 4. Section and content patterns

### Cover

Large portfolio title, Linh's name, a strong image, a concise role direction, and direct links to the numbered sections. Keep controls legible over imagery using a stable overlay or a separate surface.

### Who is Linh?

Use a short profile beside a portrait or selected image. Put contact information and language details in a clear, scannable block. Place **Tech Stack** near the top as the user requested, using compact labels or chips for Next.js, Python, HTML, CSS, TypeScript, JavaScript, and C++. Keep product and collaboration tools in their own group so the stack stays readable.

### Learn, Innovate, Network, Horizon

Keep the existing section names and project sequence. Give each project a consistent case-study structure:

1. Project name, context, and relevant date/course or organization.
2. Linh's role and contribution, stated separately from client or team work.
3. Problem, audience, or brief.
4. Process evidence such as research, planning, flows, storyboard, or prototype.
5. Outcome or learning, only when the source supports it.
6. Selected media with useful captions and accessible alternatives.
7. Small, descriptive links to the project's full slides or presentation, placed inside that project's content. Keep them as secondary text links in the style of the source portfolio; do not embed the entire Canva deck or turn a deck link into a large promotional card.

Use a mix of image-led and text-led case studies to create rhythm, while keeping typography, spacing, and metadata consistent. In the AhaFood.ai case study, explicitly distinguish the client's chatbot from the Figma screens and other work Linh completed.

## 5. Component guidance

### Section navigation

- Use semantic links to real section IDs; indicate the active section with text, shape, or underline as well as color.
- On small screens, use a compact menu with a clear label and expanded state. Close the menu after navigation.
- Keep a visible keyboard focus indicator and support Enter/Space as appropriate to the control.

### Project card / case study summary

- Use a clear title, one short description, section/category metadata, and a descriptive action such as “View case study.”
- Make the whole card clickable only when it contains one clear destination. Do not nest links or buttons inside another link.
- Place related presentation/deck links inside the project details as compact secondary links (for example, “View DMSP pitch slides ↗”). Keep the label descriptive and retain the project context.
- Hover may raise the card slightly or reveal a border accent; focus receives an equally clear treatment.
- Expanded details should use a semantic disclosure or an accessible Radix Accordion/Dialog pattern. Provide an obvious close/back action and preserve the user's place in the page.

### Buttons and links

| Variant | Appearance | Use |
| --- | --- | --- |
| Primary | Vermilion fill, white label | Main contact or case-study action |
| Secondary | Ink fill, white label | Less frequent high-priority action |
| Outline | Transparent, ink border and label | Supporting action |
| Text link | Underlined or visibly directional | In-page navigation and inline references |

Interactive controls should have at least a 44×44px touch area where practical. Include default, hover, active, focus-visible, and disabled states. Hover is supplementary; focus must remain visible without color alone.

## 6. Motion and interaction

- Motion should guide attention or confirm an action, not delay access to content.
- Use short opacity/position reveals and small hover changes. Keep transitions around 150–250ms for controls and avoid large parallax movement.
- Framer Motion may handle micro-interactions. Use GSAP/ScrollTrigger only for a small number of purposeful section reveals if CSS/Framer Motion is insufficient.
- Lenis smooth scrolling is optional. Never hijack scrolling; retain native anchors and provide a reduced-motion fallback.
- Respect `prefers-reduced-motion`: remove nonessential transforms, parallax, and scroll-linked effects while keeping all content visible.
- Avoid autoplay video and sound. Use poster images with an explicit play control for video.
- Do not add Three.js or React Three Fiber unless a specific piece of portfolio content benefits from 3D.

## 7. Accessibility and responsive rules

- Use semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and one clear heading hierarchy.
- Ensure WCAG AA contrast: 4.5:1 for normal text, 3:1 for large text and meaningful UI boundaries/focus indicators.
- Provide descriptive alt text for informative images and empty alt text for decorative images. Captions should identify the project artifact where context is needed.
- Every interaction must work by keyboard and pointer. Use Radix UI primitives for dialogs, disclosures, and menus where appropriate; do not add ARIA roles to native elements unnecessarily.
- Provide a “Skip to content” link, visible `:focus-visible` styles, and accessible names for icon-only controls.
- Do not rely on hover, color, animation, or image text to convey essential information.
- On mobile, preserve the desktop reading order, stack grids, keep controls comfortably tappable, and avoid horizontal scrolling.
- At narrow widths, shorten decorative display treatments before reducing body text below 16px.

## 8. Responsive behavior

Use content-driven breakpoints around `40rem`, `48rem`, and `64rem` rather than targeting specific devices.

- **Small:** Single-column sections; compact section navigation; project media follows the text it illustrates.
- **Medium:** Two-column profile and project layouts where both columns remain readable.
- **Large:** Editorial asymmetry and multi-column evidence grids; keep body copy within the defined readable measure.

## 9. Implementation mapping

- **Tailwind CSS:** Primary styling layer for responsive layout, spacing, typography, and component composition. Map Tailwind theme values to the shared design tokens; avoid one-off values where a token exists.
- **Radix UI Primitives:** Use for accessible menus, accordions, dialogs, and other interactive patterns when their keyboard behavior and state management help. Apply the portfolio's tokens to their visual states.
- **CSS Modules / Vanilla Extract:** Optional for isolated complex component styling or typed styles. They must consume the same token source and must not create a competing design system.
- **Responsive design:** Build mobile-first and use content-driven breakpoints. Reflow rather than shrink dense desktop compositions; preserve reading order and touch-sized controls.
- **Design system:** Maintain the primitive → semantic → component token layers in this document and shared CSS variables/Tailwind theme. Components should use shared variants and states instead of bespoke styling.
- **Web accessibility / ARIA:** Prefer semantic HTML and native controls. Apply ARIA only when native semantics are insufficient; keep accessible names, expanded/current/selected states, and live announcements accurate. Follow the keyboard, contrast, focus, reduced-motion, and image guidance in this document.
- **Framer Motion:** Use for small interface feedback such as menu, disclosure, or card transitions. Keep content available without motion.
- **GSAP (TweenMax / Timeline):** GSAP tweens and timelines may choreograph a small number of intentional visual sequences. Prefer current GSAP 3 APIs; use legacy TweenMax-compatible code only when required by an existing dependency. Avoid animating essential text in ways that delay reading.
- **GSAP ScrollTrigger:** Optional for a limited number of section reveals or pinned visual moments. Do not pin core project content or take control away from native scrolling; disable scroll-linked effects for reduced motion and narrow screens where they impair usability.
- **Lenis smooth scrolling:** Optional enhancement only. Preserve native anchor behavior, browser history, keyboard scrolling, and reduced-motion fallback. Never require Lenis to access content.
- **SVG animation:** Use lightweight inline or component SVG for decorative marks and icons. Animate only nonessential strokes/transforms; provide a static fallback and hide decorative SVG from assistive technology.
- **Page transitions:** Optional, brief transitions between routes only. Keep navigation immediate, preserve focus and page titles, respect reduced motion, and do not use transitions to conceal loading or interrupt reading. If the portfolio is a single page, in-page section navigation is sufficient.
- **Three.js / React Three Fiber:** Use only if a specific 3D portfolio artifact benefits from it. Treat 3D as progressive enhancement, provide a static poster/alternative, respect reduced motion, and avoid making it necessary for navigation or understanding.
- Keep all project content and media in a structured data source where practical so visual components remain consistent across the original section sequence.

## 10. Design review checklist

- [ ] The section and project order matches the supplied portfolio.
- [ ] The page reads as an editorial portfolio rather than a dense collage.
- [ ] Tech Stack is near the introduction and uses the exact technologies requested.
- [ ] Project copy accurately separates Linh's contribution from client/team work.
- [ ] Type, contrast, spacing, and focus states remain legible at desktop and mobile sizes.
- [ ] Navigation and project details work with keyboard and reduced motion.
- [ ] Decorative elements do not obscure evidence or create horizontal overflow.
