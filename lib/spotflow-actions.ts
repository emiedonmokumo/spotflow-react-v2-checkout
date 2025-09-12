/* eslint-disable @typescript-eslint/no-explicit-any */

import { SpotflowCheckoutProps } from "./types";

export const callSpotflowPop = (args: Record<string, any>) => {
  // Your logic here to call the Spotflow Pop-up checkout
  if (typeof document === 'undefined') {
    console.log("Document is undefined, cannot proceed.");
    return;
  };
  
  if (window.SpotflowCheckout) {
    const paymentData: SpotflowCheckoutProps = {
      merchantKey: args.merchantKey,
      encryptionKey: args.encryptionKey,
      planId: args.planId,
      amount: args.amount,
      email: args.email,
      name: args.name,
      phoneNumber: args.phoneNumber,
      currency: args.currency,
      localCurrency: args?.localCurrency,
      reference: args.reference,
      rdtCode: args?.rdtCode,
      url: args?.url,
      // onTransferConfirmationPending: args.onTransferConfirmationPending,
      callBackUrl: args?.callBackUrl,
      metadata: args?.metadata,
      countryCode: args?.countryCode,
    };
    const checkout = window.SpotflowCheckout;
    const payment = new checkout.CheckoutForm();
    payment.setup(paymentData);
  }
};
