# Developer Guide

## Folder Structure
- `layout`: global wrappers (`theme.liquid`, `checkout.liquid`) that pull in assets, structured data, and render the main content.
- `sections`: configurable building blocks surfaced in the theme editor; each owns markup, schema, and optional CSS/JS hooks.
- `snippets`: reusable fragments shared across sections/templates (e.g., buttons, cards, JSON-LD partials).
- `assets`: compiled CSS/JS, media, and static files referenced by layouts/sections.
- `config`: theme settings (`settings_schema.json`, `settings_data.json`) and other global configuration.
- `locales`: translation JSON files for Shopify’s internationalisation strings.

## Coding Conventions
- **Naming**: use kebab-case for files (`section-feature-hero.liquid`, `snippet-product-card.liquid`) and snake_case for Liquid variables.
- **Liquid best practices**: prefer `{% render %}` over `{% include %}`, scope variables tightly, and keep business logic in snippets instead of inline conditionals.
- **Indentation**: two spaces, no tabs; keep HTML/Liquid nested cleanly.
- **Comments**: add concise `{% comment %}` blocks only when logic is non-obvious (e.g., explaining SEO-specific fallbacks).

## Structured Data
- JSON-LD lives in dedicated snippets under `snippets/`, then injected via `content_for_header` or section-level `head` captures.
- When adding new schema types, extend the existing snippet pattern (e.g., `snippet-product-jsonld.liquid`), ensure properties map to Shopify objects/metafields, and validate with Google Rich Results Test.

## Asset Management
- Add CSS/JS to `assets/` and reference via `{{ 'file.css' | asset_url | stylesheet_tag }}` or `{{ 'file.js' | asset_url | script_tag }}`.
- Load scripts in `<head>`/`content_for_header` unless defer is required for performance; document any deviation.
- Deduplicate utilities into shared bundles (`theme.css`, `theme.js`) before shipping page-specific assets.

## Adding Features
- For new UX elements, create a section (configurable) or snippet (reusable) rather than duplicating markup.
- Leverage blocks inside sections for repeatable content, and pull shared logic into snippets to avoid drift.
- Test with Shopify CLI: `shopify theme dev --store <store-domain>` for live preview, then push via Git/GitHub when stable.

## Testing & Debugging
- Run `shopify theme check` before opening PRs to catch Liquid/schema issues.
- Use Shopify preview links for QA across devices/browsers; verify structured data via Google tools.
- Keep GitHub integration hooked to the store so each push generates a new preview theme for stakeholders.

