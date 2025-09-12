/* eslint-disable @typescript-eslint/no-explicit-any */

export type SpotflowCheckoutProps = {
  merchantKey: string;
  encryptionKey: string;
  planId?: string;
  email: string;
  amount?: number;
  phoneNumber?: string;
  currency: string;
  rdtCode?: string;
  url?: string;
  reference?: string;
  name?: string;
  // onTransferConfirmationPending?: (_val?: any) => void;
  callBackUrl?: string;
  metadata?: Record<string, any>;
  localCurrency?: string;
  countryCode?: string;
};


export type callback = (response?: any) => void;

export type InitialisePayment = (options: {
  config?: Omit<SpotflowCheckoutProps, "publicKey">;
}) => void;

export type HookConfig = Omit<Partial<SpotflowCheckoutProps>, "publicKey">;

