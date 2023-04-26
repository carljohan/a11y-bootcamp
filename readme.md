# a11y code camp

> A 3 hour code camp to improve the accessibility of the a dummy e-commerce site

Below are the improvements that were made to the site
>
## Products page

- links using `<a>` tags instead of javascript `onClick`
- alt attributes on images
- title on hover using opacity for screen readers (not display none)

## Product page

- alt attributes on images

## Components

### Loading

- img alt attribute

### Input

- add `htmlFor` attribute to label
- add `id` attribute to input
- redo number validation
- [inputMode attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
- [pattern attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)

### Select

- keyboard navigation (using arrows)
- `aria-haspopup` attribute
- `aria-labelledby` attribute
- `aria-selected` attribute
- `role="listbox"` for the select
- `role="option"` for each option
- `tabindex="-1"` on select and options

### Button

- increased contrast color for readability
- `aria-label` attribute

### Modal

- keyboard navigation (close on escape)
- use the [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element instead of a div
- `aria-label` attribute
- `role="dialog"` attribute
- `aria-modal="true"` attribute
