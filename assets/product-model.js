if (!customElements.get('product-model')) {
  customElements.define(
    'product-model',
    class ProductModel extends DeferredMedia {
      constructor() {
        super();
        this.loadContent();
      }

      loadContent() {
        super.loadContent();

        Shopify.loadFeatures([
          {
            name: 'model-viewer-ui',
            version: '1.0',
            onLoad: this.setupModelViewerUI.bind(this),
          },
        ]);
      }

      setupModelViewerUI(errors) {
        if (errors) return;

        const modelViewer = this.querySelector('model-viewer');

        if (modelViewer) {
          modelViewer.setAttribute('auto-rotate', '');
          modelViewer.setAttribute('auto-rotate-delay', '0');
          modelViewer.setAttribute('rotation-per-second', '20deg');
          modelViewer.setAttribute('camera-controls', '');
        }

        this.modelViewerUI = new Shopify.ModelViewerUI(modelViewer);
      }
    }
  );
}

window.ProductModel = {
  loadShopifyXR() {
    Shopify.loadFeatures([
      {
        name: 'shopify-xr',
        version: '1.0',
        onLoad: this.setupShopifyXR.bind(this),
      },
    ]);
  },

  setupShopifyXR(errors) {
    if (errors) return;

    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', () => this.setupShopifyXR());
      return;
    }

    document.querySelectorAll('[id^="ProductJSON-"]').forEach((modelJSON) => {
      window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent));
      modelJSON.remove();
    });
    window.ShopifyXR.setupXRElements();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  if (window.ProductModel) window.ProductModel.loadShopifyXR();
});
