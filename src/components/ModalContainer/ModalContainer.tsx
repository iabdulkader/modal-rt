import React from "react";
import { resolveValue } from "../../core/modal/ModalTypes";
import { ModalContainerProps } from "./ModalContainerProps";

export const ModalContainer: React.FC<ModalContainerProps> = React.memo(
  ({ modal, children }) => {
    const modalContent = <>{resolveValue(modal.modal, modal)}</>;

    return (
      <>
        {typeof children === "function" ? (
          children({
            modalContent,
          })
        ) : (
          <>{modalContent}</>
        )}
      </>
    );
  }
);
