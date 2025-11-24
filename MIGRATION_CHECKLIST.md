# Migration Checklist

- [ ] **Backup current theme**: duplicate the live theme in Shopify admin and export existing theme/settings files for safety.
- [ ] **Install rewrite theme**: connect this repository via Shopify’s GitHub integration and pull the latest `main` build into a new theme draft.
- [ ] **Transfer config**: copy `config/settings_data.json` and any custom sections/templates required for bespoke layouts, adjusting handles as needed.
- [ ] **Reconfigure settings**: walk through theme editor panels, update SEO metafields, and confirm structured data toggles align with the shop’s content model.
- [ ] **Smoke test storefront**: validate navigation, collection/product pages, cart drawer, and checkout flows in preview mode.
- [ ] **Validate JSON-LD**: run representative URLs through Google Rich Results Test to confirm schema coverage and fix warnings.
- [ ] **Publish theme**: once satisfied, publish the new theme and monitor analytics/logs for regressions.

