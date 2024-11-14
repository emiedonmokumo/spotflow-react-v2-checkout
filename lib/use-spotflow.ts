import { callSpotflowPop } from "./spotflow-actions";
import { HookConfig, InitialisePayment } from "./types";

export default function useSpotflow(hookConfig: HookConfig) {
  function initialisePayment({ config, onClose, onSuccess }: Parameters<InitialisePayment>[0]) {
    const args = { ...hookConfig, ...config };
    const {
      merchantKey,
      planId,
      encryptionKey,
      email,
      amount,
      currency = "NGN",
      firstname,
      lastname,
      onTransferConfirmationPending,
      phone,
      reference,
      regionId,
      rdtCode,
      url
    } = args;

    const spotflowArgs = {
      merchantKey,
      planId,
      encryptionKey,
      email,
      amount,
      onSuccess: onSuccess ? onSuccess : () => null,
      onCancel: onClose ? onClose : () => null,
      ...(regionId && { regionId }),
      ...(email && { email }),
      ...(firstname && { firstname }),
      ...(lastname && { lastname }),
      ...(phone && { phone }),
      ...(currency && { currency }),
      ...(reference && { reference }),
      ...(rdtCode && { rdtCode }),
      ...(url && { url }),
      ...(onTransferConfirmationPending && { onTransferConfirmationPending }),
    };

    callSpotflowPop(spotflowArgs);
  }

  return initialisePayment;
}
