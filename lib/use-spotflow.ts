import { useEffect, useState } from "react";
// import { callSpotflowPop } from "./spotflow-actions";
import { HookConfig } from "./types";

export default function useSpotflow() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Mark as client-side ready
    setIsReady(true);
  }, []);

  // Guard against server-side execution
  if (
    !isReady ||
    typeof window === "undefined" ||
    typeof document === "undefined"
  ) {
    console.warn("usePopup: Cannot start popup on server-side");
    return;
  }
  async function initialisePayment(args: HookConfig) {
    // Guard against server-side execution
    if (
      !isReady ||
      typeof window === "undefined" ||
      typeof document === "undefined"
    ) {
      console.warn("usePopup: Cannot initialize popup on initialisePayment");
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
      // onTransferConfirmationPending,
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
      planId,
      encryptionKey,
      email,
      amount,
      reference,
      ...(name && { name }),
      ...(phoneNumber && { phoneNumber }),
      ...(currency && { currency }),
      ...(rdtCode && { rdtCode }),
      ...(url && { url }),
      ...(callBackUrl && { callBackUrl }),
      ...(metadata && { metadata }),
      ...(localCurrency && { localCurrency }),
      ...(countryCode && { countryCode }),
      // ...(onTransferConfirmationPending && { onTransferConfirmationPending }),
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
