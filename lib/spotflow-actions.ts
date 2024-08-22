/* eslint-disable @typescript-eslint/no-explicit-any */

import { SpotflowCheckoutProps } from "./types";

export const callSpotflowPop = (args: Record<string, any>) => {
  // Your logic here to call the Spotflow Pop-up checkout

  if (window.SpotflowCheckout) {
    const paymentData: SpotflowCheckoutProps = {
      merchantKey: args.merchantKey,
      encryptionKey: args.encryptionKey,
      planId: args.planId,
      email: args.email,
      amount: args.amount || 0,
      regionId: args.regionId,
      phone: args.phone,
      currency: args.currency,
      reference: args.reference,
      firstname: args.firstname,
      lastname: args.lastname,
      onTransferConfirmationPending: args.onTransferConfirmationPending,
    };
    const checkout = window.SpotflowCheckout;
    const payment = new checkout.CheckoutForm({ onSuccess: args.onSuccess, onClose: args.onClose });
    payment.setup(paymentData);
  }
};
