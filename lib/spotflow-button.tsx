import React from "react";
import useSpotflow from "./use-spotflow";
import { SpotflowCheckoutProps } from "./types";

interface Props extends SpotflowCheckoutProps {
  text?: string;
  className?: string;
  disabled?: boolean;
}
function SpotflowPaymentButton(props: React.PropsWithChildren<Props>) {
  const { text, className, disabled, children, ...rest } = props;
  const initialisePayment = useSpotflow();
  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={() => initialisePayment && initialisePayment(rest)}
    >
      {text || children}
    </button>
  );
}

export default SpotflowPaymentButton;
