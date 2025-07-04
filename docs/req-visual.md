## 2.0 VISUAL DESIGN & BRANDING GUIDELINES

### 2.1. Typography

- **Primary Font:** Inter. This font must be used for all text content, including headings, subheadings, and body text, to ensure readability and a modern aesthetic.
- **Headings (H1, H2):** Use Inter Bold.
- **Subheadings (H3, H4) & Emphasized Text:** Use Inter SemiBold.
- **Body Text:** Use Inter Regular.

### 2.2. Color Palette

- **Primary Color (Deep Blue):** `#0A2540`. To be used for core branding elements, dark backgrounds, and primary text to convey trust and professionalism.
- **Accent Color (Vibrant Green):** `#00C853`. Must be used for all primary Call-to-Action (CTA) buttons and interactive elements that require user attention (e.g., links, icons for success states). This color signifies action, growth, and success.
- **Neutral Colors:**
    - **White (#FFFFFF):** Primary background color for a clean, spacious feel.
    - **Light Gray (#F6F9FC):** For secondary backgrounds, cards, and section dividers to create subtle visual hierarchy.
    - **Charcoal Gray (#333333):** For all body text to ensure optimal readability on light backgrounds.

### 2.3. Logo Usage

- The official QualifAI Combination Mark (icon + wordmark) must be used in the header. The icon part of the logo can be used as a favicon for the browser tab.
- The "AI" part of the "QualifAI" wordmark should be emphasized, either through a bolder weight or by using the Accent Color (`#00C853`).

### 2.4. General Style

- **UI Elements:** All UI elements, such as buttons and input fields, must have rounded corners to create a modern and friendly look.
- **Iconography:** Icons should be clean, modern, and consistent in style (e.g., line-art style). They should visually represent the associated content effectively.

### 2.5. Spacing and Layout

- **Core Principle:** A consistent spacing system must be used to ensure a clean, balanced, and harmonious layout.
- **Spacing Scale:** All margins, paddings, and spatial relationships between elements must use an 8px-based scale (e.g., `4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`). This creates a predictable visual rhythm and eliminates arbitrary spacing.
- **Layout Grid:** The main content layout should be based on a 12-column grid system to ensure alignment and consistency across different screen sizes.

### 2.6. Interactive Element States

- **Core Principle:** All interactive elements (buttons, links, inputs) must have clearly defined visual states to provide immediate feedback to the user.
- **States to Define:**
    - **Hover:** A subtle change in background color or shadow to indicate the element is interactive.
    - **Focus:** A distinct outline (e.g., using the Accent Color) must be visible when an element is navigated to via keyboard, ensuring accessibility.
    - **Active:** A visual change (e.g., slightly darker color or inset shadow) to show the element is being pressed.
    - **Disabled:** Reduced opacity and a `not-allowed` cursor to indicate the element is not currently interactive.

### 2.7. Animation & Transitions

- **Core Principle:** Animations should be purposeful, providing feedback or smooth transitions without being distracting.
- **Standard Transition:** All state changes (e.g., hover effects) should use a consistent transition.
    - **Property:** `all`
    - **Duration:** `200ms`
    - **Easing Function:** `ease-in-out`

### 2.8. Accessibility (a11y)

- **Core Principle:** The application must be designed and developed to be accessible to all users, including those with disabilities.
- **Standard:** Adherence to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA is mandatory.
- **Key Requirements:**
    - **Color Contrast:** Text and interactive elements must have a contrast ratio of at least 4.5:1 against their background.
    - **Focus Visibility:** All interactive elements must have a clearly visible focus state (as defined in Section 2.6).
    - **Font Size:** Body text should be at a minimum of `16px` to ensure readability.

### 2.9. Responsive Design Breakpoints

- **Core Principle:** The layout must adapt gracefully to different screen sizes, providing an optimal viewing experience on all devices.
- **Standard Breakpoints (based on Tailwind CSS defaults):**
    - **Mobile (sm):** `640px`
    - **Tablet (md):** `768px`
    - **Laptop (lg):** `1024px`
    - **Desktop (xl):** `1280px`
    - **Large Desktop (2xl):** `1536px`