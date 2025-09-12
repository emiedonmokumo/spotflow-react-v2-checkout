export function getCdnFn() {
  const script = document.createElement("script");
  const inlineSdk = "https://v1.inline-checkout.spotflow.one/dist/checkout-inline.js";
  script.src = inlineSdk;

  if(document === undefined) {
    console.warn("Document is undefined in the getCdnFn");
    return;
  }
  if (!document.querySelector(`[src="${inlineSdk}"]`)) {
    document.body.appendChild(script);
  }
}
