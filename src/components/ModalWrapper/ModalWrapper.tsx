import React from "react";
import modal from "../../core/modal";
import { WrapperPropTypes } from "./WrapperPropTypes";
import "./ModalWrapper.css";

const ModalWrapper = React.memo(
  ({
    id,
    children,
    animation = true,
    customTrigger = false,
  }: WrapperPropTypes) => {
    const [modalState, setModalState] = React.useState(false);
    const close = () => {
      setModalState(true);

      const timeOut = setTimeout(() => {
        modal.close(id);
      }, 300);

      return () => {
        clearTimeout(timeOut);
      };
    };

    return (
      <div
        className="modal_rt_parent"
        style={{ zIndex: `${999 + Number(id)}` }}
        id={id}
      >
        <div className="modal_rt_overlay" id={id} onClick={close} />

        <div className="modal_rt_container">
          <div
            className={`modal_rt_wrapper ${
              animation ? "modal_rt_animationIn" : ""
            } ${modalState ? "modal_rt_animationOut" : ""}`}
            id={id}
          >
            {customTrigger === false ? (
              <div className="modal_rt_btnDiv">
                <div className="modal_rt_btnCountainer">
                  <button className="modal_rt_btn" onClick={close}>
                    <svg viewBox="0 0 512 512">
                      <path
                        fill="#fff"
                        d="M443.6 387.1 312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ) : null}

            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default ModalWrapper;
