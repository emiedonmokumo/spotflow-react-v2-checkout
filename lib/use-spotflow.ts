import { useEffect, useState } from "react";
import { SpotflowCheckoutProps } from "./types";

export default function useSpotflow() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const inlineSdk = "https://v2.inline-checkout.spotflow.one/dist/checkout-inline.js";
      if (!document.querySelector(`[src="${inlineSdk}"]`)) {
        const script = document.createElement("script");
        script.src = inlineSdk;
        script.onload = () => setIsReady(true);
        script.onerror = () => {
          console.error("Failed to load Spotflow Inline SDK script.");
          setIsReady(false);
        };
        document.body.appendChild(script);
      } else {
        setIsReady(true);
      }
    }
  }, []);

  async function initialisePayment(args: SpotflowCheckoutProps) {
    // Guard against server-side execution
    if (
      !isReady ||
      typeof window === "undefined" ||
      typeof document === "undefined"
    ) {
      console.warn("Cannot initialize Spotflow popup in this environment. Please ensure this is run on the client side.");
      return;
    }

    const {
      merchantKey,
      planId,
      encryptionKey,
      email,
      amount,
      currency,
      name,
      phoneNumber,
      reference,
      rdtCode,
      url,
      callBackUrl,
      metadata,
      localCurrency,
      countryCode,
    } = args;

    const spotflowArgs = {
      merchantKey,
      encryptionKey,
      email,
      amount,
      reference,
      currency,
      ...(name && { name }),
      ...(planId && { planId }),
      ...(phoneNumber && { phoneNumber }),
      ...(rdtCode && { rdtCode }),
      ...(url && { url }),
      ...(callBackUrl && { callBackUrl }),
      ...(metadata && { metadata }),
      ...(localCurrency && { localCurrency }),
      ...(countryCode && { countryCode }),
    };

    try {
      // Dynamically import the function only when needed
      const { callSpotflowPop } = await import("./spotflow-actions"); // Adjust path
      callSpotflowPop(spotflowArgs);
    } catch (error) {
      console.error("Error loading popup:", error);
    }
  }

  return initialisePayment;
}
