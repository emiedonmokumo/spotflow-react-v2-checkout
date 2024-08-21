/* eslint-disable @typescript-eslint/no-explicit-any */
export type SpotflowProps = {
  merchantKey: string;
  encryptionKey: string;
  email: string;
  amount?: number;
  planId: string;
  references?: string;
};

export type callback = (response?: any) => void;

export type InitialisePayment = (options: {
  onSuccess?: callback;
  onClose?: callback;
  config?: Omit<SpotflowProps, "publicKey">;
}) => void;

export type HookConfig = Omit<Partial<SpotflowProps>, "publicKey">;
