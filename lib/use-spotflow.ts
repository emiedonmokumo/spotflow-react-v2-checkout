import { callSpotflowPop } from "./spotflow-actions";
import { HookConfig, InitialisePayment } from "./types";

export default function useSpotflow(hookConfig: HookConfig) {
  function initialisePayment({ config }: Parameters<InitialisePayment>[0]) {
    const args = { ...hookConfig, ...config };
    const { merchantKey, planId, encryptionKey, email, amount } = args;

    const spotflowArgs = {
      merchantKey,
      planId,
      encryptionKey,
      email,
      amount,
    };

    callSpotflowPop(spotflowArgs);
  }

  return initialisePayment;
}
