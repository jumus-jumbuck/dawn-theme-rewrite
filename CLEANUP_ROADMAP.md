# Cleanup Roadmap

- **Remove leftover app code** _(effort: medium)_: scan `snippets`, `assets`, and `sections` for references to deprecated apps; delete unused Liquid, CSS, or JS once confirmed safe, keeping commit notes for reversibility.
- **Standardise naming conventions** _(effort: low)_: align legacy section/snippet filenames with the new `section-*` / `snippet-*` scheme; update references in templates and JSON to avoid load errors.
- **Prune unused schema settings** _(effort: medium)_: audit each section’s `schema` block to drop obsolete settings/options, reducing editor clutter and preventing misconfigured toggles.
- **Consolidate duplicate CSS/JS** _(effort: medium-high)_: move repeated styles/scripts into shared assets (e.g., `theme.css`, `theme.js`) and ensure sections reference the consolidated bundles.
- **Refactor complex Liquid** _(effort: high)_: identify large conditional blocks or repeated fragments (“spaghetti”) and extract them into reusable snippets/blocks with clear inputs, improving readability and testability.
- **Metafield/dynamic block conversions** _(effort: medium)_: review hard-coded content (copy, icons, imagery) and migrate suitable pieces into Shopify metafields or dynamic blocks to empower content editors.

