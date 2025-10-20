export function getCdnFn() {
  if (document === undefined) {
    console.error("Document is undefined in this environment");
    return;
  }
  const script = document.createElement("script");
  const inlineSdk =
    "https://v2.inline-checkout.spotflow.one/dist/checkout-inline.js";
  script.src = inlineSdk;

  if (!document.querySelector(`[src="${inlineSdk}"]`)) {
    document.body.appendChild(script);
  }
}
