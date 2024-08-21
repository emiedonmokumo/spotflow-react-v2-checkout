/* eslint-disable @typescript-eslint/no-explicit-any */

export const callSpotflowPop = (args: Record<string, any>) => {
  // Your logic here to call the Spotflow Pop-up checkout

  if (window.SpotflowCheckout) {
    const checkout = window.SpotflowCheckout;
    const payment = new checkout.CheckoutForm(
      args.merchantKey,
      args.encryptionKey,
      args.email,
      args.amount || 0,
      args.planId
    );
    payment.setup();
  }
};
