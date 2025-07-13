## 2.0 VISUAL DESIGN & BRANDING GUIDELINES

### 2.1. Typography

- **Primary Font:** Inter. This font must be used for all text content, including headings, subheadings, and body text, to ensure readability and a modern aesthetic.
- **Headings (H1, H2):** Use Inter Bold. **Line-height:** 1.2 for a tighter, visually impactful appearance.
- **Subheadings (H3, H4) & Emphasized Text:** Use Inter SemiBold.
- **Body Text:** Use Inter Regular. **Line-height:** 1.5–1.6 for comfortable, easy reading in paragraphs and long-form content.

### 2.2. Color Palette

- **Primary Color (Deep Blue):** `#0A2540`. To be used for core branding elements, dark backgrounds, and primary text to convey trust and professionalism.
- **Accent Color / Success (Vibrant Green):** `#00C853`. Must be used for all primary Call-to-Action (CTA) buttons and interactive elements that require user attention (e.g., links, icons for success states). This color signifies action, growth, and success.
- **Error / Destructive (Red):** `#D32F2F`. Used for delete actions, error messages, and failed validation states.
- **Warning (Amber/Yellow):** `#FBC02D`. Used for non-critical alerts or warnings that require user attention but are not errors.
- **Info (Blue):** `#1976D2`. Used for informational alerts, highlights, or neutral notifications.
- **Neutral Colors:**
    - **White (#FFFFFF):** Primary background color for a clean, spacious feel.
    - **Light Gray (#F6F9FC):** For secondary backgrounds, cards, and section dividers to create subtle visual hierarchy.
    - **Charcoal Gray (#333333):** For all body text to ensure optimal readability on light backgrounds.

> These semantic colors should be used consistently for their respective states throughout the application to maintain a cohesive and accessible user experience.

### 2.3. Logo Usage

- The official QualifAI Combination Mark (icon + wordmark) must be used in the header. The icon part of the logo can be used as a favicon for the browser tab.
- The "AI" part of the "QualifAI" wordmark should be emphasized, either through a bolder weight or by using the Accent Color (`#00C853`).

### 2.4. General Style

- **UI Elements:** All UI elements, such as buttons and input fields, must have rounded corners to create a modern and friendly look.
- **Border Radius:**
    - **Buttons and Inputs:** Use a `4px` border-radius for a subtle, modern appearance.
    - **Cards and Large Containers:** Use an `8px` border-radius to provide a sense of separation and softness for larger UI blocks.
- **Shadows:**
    - **Shadow 1 (Subtle):** `0 1px 2px 0 rgba(16, 24, 40, 0.05)` — For buttons, small elements, and hover states.
    - **Shadow 2 (Medium):** `0 2px 8px 0 rgba(16, 24, 40, 0.10)` — For cards and dropdowns.
    - **Shadow 3 (Strong):** `0 4px 24px 0 rgba(16, 24, 40, 0.18)` — For modals, overlays, and elevated surfaces.
- **Iconography:** Icons should be clean, modern, and consistent in style (e.g., line-art style). All icons must be sourced from the Lucide or Heroicons library to maintain a consistent visual style, using a default stroke width of 1.5px. They should visually represent the associated content effectively.

#### Button Types

- **Primary Button:**
    - Solid fill using the Accent Color (`#00C853`).
    - White text for maximum contrast.
    - Used for main calls-to-action (CTAs) and the most important user actions.
- **Secondary Button:**
    - "Ghost" style: transparent background with a 1px solid border using the Primary Color (`#0A2540`).
    - Text in the Primary Color.
    - Used for secondary actions that are important but not the main CTA.
- **Tertiary/Text Button:**
    - No border or background, just colored text (typically the Primary or Accent Color).
    - Used for less important or low-emphasis actions, such as links or inline actions.

These button styles ensure a clear visual hierarchy and guide users toward the most important actions on each screen.

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

#### Input Field States

- **Placeholder Text:**
    - Use a medium gray color (`#A0AEC0` or similar) for placeholder text to ensure it is visible but clearly distinct from filled-in text.
    - Placeholder text should use regular font weight and be italicized for clarity.
- **Filled-in Text:**
    - Use the standard body text color (Charcoal Gray, `#333333`) for user input.
- **Default State:**
    - Input fields have a `1px` solid border in Light Gray (`#F6F9FC`) and a `4px` border-radius.
- **Focus State:**
    - On focus, the border color changes to the Accent Color (`#00C853`) and a subtle box-shadow is applied for accessibility.
- **Error State:**
    - Input fields with validation errors must have a `1px` solid border in Error Red (`#D32F2F`).
    - Display a red error icon inside the input or adjacent to it, and show an error message below in red text.
- **Success State:**
    - Input fields that pass validation may have a `1px` solid border in Accent Green (`#00C853`).
    - Optionally display a green checkmark icon and a success message in green text below the input.

These states ensure users receive clear, immediate feedback when interacting with forms, improving usability and accessibility.

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

### 2.10. Imagery & Illustrations

- **Photography:**
    - Images should be professional, authentic, and reflect a diverse range of people and real-world work environments.
    - Prefer photos that feature people collaborating, using technology, or engaging in professional activities relevant to the product.
    - Use high-resolution images with natural lighting. Avoid overly staged or generic stock photos.
    - If color overlays or filters are used, apply subtle tints using the primary (Deep Blue) or accent (Vibrant Green) color at low opacity to maintain brand consistency.

- **Illustrations:**
    - Use flat, two-tone illustrations that leverage the primary and accent color palette for a cohesive look.
    - Illustration style should be modern, minimal, and friendly, with clean lines and simple shapes.
    - Avoid excessive detail or gradients; keep visuals clear and easy to interpret at a glance.
    - Illustrations can be used to highlight features, explain concepts, or add visual interest to empty states and onboarding screens.

### 2.11. Dark Mode

- **Backgrounds:**
    - Use Deep Blue (`#0A2540`) or a very dark gray (`#181A1B`) as the primary background color for dark mode interfaces.
    - Secondary surfaces (cards, popovers) may use slightly lighter dark shades (e.g., `#1E2226`) for visual hierarchy.
- **Text Colors:**
    - Use White (`#FFFFFF`) or Light Gray (`#F6F9FC`) for primary text on dark backgrounds to ensure readability and meet accessibility contrast ratios (minimum 4.5:1).
    - Muted or secondary text can use medium-light grays (e.g., `#B0B8C1`).
    - Avoid using Charcoal Gray (`#333333`) or other dark colors for text on dark backgrounds, as they will not be readable.
- **Other Elements:**
    - Borders and dividers should use subtle, semi-transparent white or gray lines (e.g., `rgba(255,255,255,0.08)`).
    - All interactive and semantic colors (Accent, Error, Warning, Info) should be checked for sufficient contrast against dark backgrounds.

> All color choices in dark mode must meet WCAG 2.1 Level AA contrast requirements for accessibility.