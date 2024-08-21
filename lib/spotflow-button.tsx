import React from "react";
import useSpotflow from "./use-spotflow";
import { SpotflowProps } from "./types";

interface Props extends SpotflowProps {
  text?: string;
  className?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  disabled?: boolean;
}
function SpotflowPaymentButton(props: React.PropsWithChildren<Props>) {
  const { text, className, onSuccess, disabled, children, onClose, ...rest } = props;
  const initialisePayment = useSpotflow(rest);
  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={() => initialisePayment({ config: rest, onSuccess, onClose })}
    >
      {text || children}
    </button>
  );
}

export default SpotflowPaymentButton;
