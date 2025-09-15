/* eslint-disable @typescript-eslint/no-explicit-any */

export type SpotflowCheckoutProps = {
  merchantKey: string;
  encryptionKey: string;
  email: string;
  currency: string;

  phoneNumber?: string;
  rdtCode?: string;
  planId?: string;
  amount?: number;
  url?: string;
  reference?: string;
  name?: string;
  callBackUrl?: string;
  metadata?: Record<string, any>;
  localCurrency?: string;
  countryCode?: string;
};
