# Modern "Editorial" Design Language

This document outlines the **Modern Editorial** design language for Ms. Irene's Portfolio. This aesthetic is characterized by a sophisticated, content-first approach that mimics the warmth and readability of high-quality print media while leveraging modern web interactivity.

## Core Philosophy

*   **Warmth & Sophistication**: Moving away from sterile stark white or dark modes, we use a "Warm Paper" foundation that feels organic and inviting.
*   **Typography-Driven**: Strong contrast between serif headings (for elegance) and sans-serif body text (for readability).
*   **Minimalist but Textured**: Clean layouts that use subtle borders, muted gold accents, and "paper" textures rather than heavy shadows or gradients.
*   **Content-First**: The design recedes to let the content (curriculum, philosophy, experience) shine.

---

## Color Palette

The palette is inspired by premium stationery, ink, and gold leaf.

### Base Colors
*   **Warm Paper (Background)**: `#FDFBF7`
    *   *Usage*: Main page background, subtle section backgrounds. Replaces standard white.
*   **Deep Navy (Primary)**: `#0F172A`
    *   *Usage*: Primary text, primary buttons, strong borders. Replaces standard black.
*   **Soft Black (Text)**: `#1A1A1A`
    *   *Usage*: Headings, main body text where Navy is too strong.
*   **Dark Grey (Subtext)**: `#4A4A4A`
    *   *Usage*: Secondary text, meta information, descriptions.

### Accents & Borders
*   **Muted Gold (Accent)**: `#D4AF37`
    *   *Usage*: Highlights, active states, icons, subtle decorative elements. *Use sparingly.*
*   **Paper Border**: `#E5E0D8`
    *   *Usage*: Card borders, dividers, inputs.

### Usage Examples
```tsx
// Tailwind Config Reference
colors: {
  editorial: {
    bg: '#FDFBF7',
    text: '#1A1A1A',
    subtext: '#4A4A4A',
    accent: '#D4AF37',
    navy: '#0F172A',
    border: '#E5E0D8',
  }
}
```

---

## Typography

We use a classic pairing of Serif for personality and Sans-Serif for utility.

### Headings: Playfair Display (Serif)
*   **Font Family**: `var(--font-playfair)`, Georgia, serif
*   **Usage**: Page titles, section headings, pull quotes.
*   **Characteristics**: Elegant, high-contrast strokes.

### Body: Inter (Sans-Serif)
*   **Font Family**: `var(--font-inter)`, system-ui, sans-serif
*   **Usage**: Paragraphs, UI elements, navigation, buttons.
*   **Characteristics**: Clean, legible, modern.

---

## UI Components

### Buttons

**Primary Button**
*   **Appearance**: Solid Deep Navy background, White text.
*   **Hover**: Shifts to Accent (Muted Gold) or lighter Navy.
*   **Typography**: Serif or Sans-serif (Bold).
*   **Class**: `.btn-primary`

**Secondary Button**
*   **Appearance**: Transparent/White background, Deep Navy border, Deep Navy text.
*   **Hover**: Warm Paper background, Accent border.
*   **Class**: `.btn-secondary`

### Cards & Containers
*   **Background**: White (`#FFFFFF`) or Warm Paper (`#FDFBF7`) depending on contrast needs.
*   **Border**: 1px solid Paper Border (`#E5E0D8`).
*   **Shadow**: Minimal or none. We prefer borders to define separation.
*   **Rounded Corners**: Moderate (e.g., `rounded-lg` or `rounded-xl`), avoiding overly pill-shaped or sharp edges.

### Visual Assets
*   **Style**: Line art / SVG illustrations.
*   **Colors**: Stroke in Deep Navy (`#0F172A`), Fills in White or Warm Paper, Highlights in Muted Gold (`#D4AF37`).
*   **Example**: See `src/components/EditorialAssets.tsx`.

---

## Motion & Interaction

*   **Principles**: Gentle, fluid, non-distracting.
*   **Transitions**: `0.3s` to `0.6s` duration.
*   **Types**:
    *   `Fade In`: Elements gently appear.
    *   `Slide Up`: Content rises into view (e.g., `y: 20` to `y: 0`).
    *   **Hover**: Subtle color shifts or slight lifts (e.g., `translate-y-[-2px]`).

---

## Implementation Guidelines

1.  **Global Styles**: Ensure `body` has `bg-editorial-bg` and `text-editorial-navy`.
2.  **Text Hierarchy**: Use `text-editorial-navy` for headings and `text-editorial-subtext` for supporting text.
3.  **Spacing**: Use generous whitespace (`py-16`, `py-24`) to allow the design to breathe, mimicking the margins of a book or magazine.
