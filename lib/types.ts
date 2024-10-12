/* eslint-disable @typescript-eslint/no-explicit-any */
export type SpotflowProps = {
  merchantKey: string;
  rdtCode?: string;
  encryptionKey: string;
  planId?: string;
  regionId?: string;
  email: string;
  phone?: string;
  amount?: number;
  currency?: string;
  reference?: string;
  firstname?: string;
  lastname?: string;
  onTransferConfirmationPending?: (_val?: any) => void;
};

export type callback = (response?: any) => void;

export type InitialisePayment = (options: {
  onSuccess?: callback;
  onClose?: callback;
  config?: Omit<SpotflowProps, "publicKey">;
}) => void;

export type HookConfig = Omit<Partial<SpotflowProps>, "publicKey">;

export type SpotflowCheckoutProps = {
  merchantKey: string;
  encryptionKey: string;
  planId?: string;
  regionId?: string;
  email: string;
  phone?: string;
  amount?: number;
  currency?: string;
  rdtCode?: string;
  onSuccess?: (_val?: any) => void;
  onClose?: () => void;
  reference?: string;
  firstname?: string;
  lastname?: string;
  onTransferConfirmationPending?: (_val?: any) => void;
};
