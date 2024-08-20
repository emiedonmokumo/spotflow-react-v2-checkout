/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
  SpotflowCheckout: {
    CheckoutForm: any;
  };
}

declare var SpotflowCheckout: {
  CheckoutForm: any;
};

declare global {
  interface Window {
    SpotflowCheckout: {
      CheckoutForm: any;
    };
  }
}
