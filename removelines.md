# Removed Line Patterns and Effects

Below are the code snippets and configurations that were removed or disabled to clean up the line patterns across the website.

## 1. Global Styles (src/app/globals.css)

### CRT Scanlines Effect
```css
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(0deg,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15) 1px,
      transparent 1px,
      transparent 2px);
  pointer-events: none;
  z-index: 9999;
}
```

### CRT Glow Effect
```css
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 150px rgba(0, 255, 0, 0.05);
  pointer-events: none;
  z-index: 9998;
}
```

### Global Border Pattern (Visible white line)
```css
@layer base {
  * {
    @apply border-border; /* Removed this specific apply */
  }
}
```

### Background Grid Utilities
```css
.bg-grid-lines {
  background-image:
    linear-gradient(to right, var(--color-terminal-green) 1px, transparent 1px),
    linear-gradient(to bottom, var(--color-terminal-green) 1px, transparent 1px);
  background-size: 8px 8px;
}

.matrix-bg {
  background:
    radial-gradient(ellipse at top, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at bottom,
      rgba(0, 170, 0, 0.05) 0%,
      transparent 50%);
}
```

## 2. Layout & Components (src/app/layout.tsx)

### Background Scanner Component
```tsx
<Mounted>
  <BackgroundGrid />
</Mounted>
```

## 3. Section Header Dashed Lines

### Skills Section (src/components/Skills.tsx)
```tsx
<div className="flex-1 border-t border-dashed text-terminal-dim" />
```

### Projects Section (src/components/Projects.tsx)
```tsx
<div className="flex-1 border-t border-dashed border-[#00aa00]" />
```

### Blog Section (src/components/BlogClient.tsx)
```tsx
<div className="flex-1 border-t border-dashed border-[#00aa00]" />
```
