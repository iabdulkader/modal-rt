import { styled, keyframes } from "goober";
import React from "react";
import modal from "../../core/modal";
import { WrapperPropTypes } from "./WrapperPropTypes";

const ModalWrapper = React.memo(
  ({
    id,
    children,
    animation = true,
    customTrigger = false,
  }: WrapperPropTypes) => {
    type WrapperProps = {
      animation?: string;
      id?: string;
    };

    type IndexProps = {
      id?: string;
    };

    const zoom = keyframes`
        0% {
            transform: scale(0);     
        }
        50% {
            transform: scale(0.7);   
        }
        100% {
            transform: scale(1);         
        }
    `;

    const Parent = styled("div")<IndexProps>`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      ${({ id }) => `z-index: ${999 + Number(id)}`};
    `;

    const OverLay = styled("div")`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    `;

    const Container = styled("div")`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    const Wrapper = styled("div")<WrapperProps>`
      padding: 1rem;
      position: relative;
      display: flex;
      justify-content: center;
      max-width: 100%;
      max-height: 100%;
      scale: 1;
      transition: all 300ms ease-in-out;
      ${({ animation }) =>
        animation === "true" && `animation: ${zoom} 250ms linear`};
    `;

    const ButtonDiv = styled("div")`
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      right: 0.2rem;
      top: -0.1rem;
    `;

    const ButtonContainer = styled("div")`
      height: 1.5rem;
      width: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(63, 146, 107);
      border-radius: 50%;
      transition: all 300ms ease-in-out;
      &:hover {
        background: #dc3535;
      }
    `;

    const Button = styled("button")`
      margin: 0;
      padding: 0;
      height: 75%;
      width: 75%;
      background: transparent;
      border: none;
      outline: none;
    `;

    const close = () => {
      modal.close(id);
    };

    return (
      <Parent id={id}>
        <OverLay id={id} onClick={close} />

        <Container>
          <Wrapper id={id} animation={animation.toString()}>
            {customTrigger === false ? (
              <ButtonDiv>
                <ButtonContainer>
                  <Button onClick={close}>
                    <svg viewBox="0 0 512 512">
                      <path
                        fill="#fff"
                        d="M443.6 387.1 312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"
                      />
                    </svg>
                  </Button>
                </ButtonContainer>
              </ButtonDiv>
            ) : null}

            {children}
          </Wrapper>
        </Container>
      </Parent>
    );
  }
);

export default ModalWrapper;
