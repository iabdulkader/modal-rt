import { styled, keyframes } from 'goober';
import React from 'react';
import modal from '../../core/modal';
import { WrapperPropTypes } from "./WrapperPropTypes";

const ModalWrapper = ({ id, children, animation = true, customTrigger = false }: WrapperPropTypes) => {
    
    type WrapperProps = {
        animation?: boolean;
    };

    const zoom = keyframes`
        0% {
            transform: scale(0);
            transform: translate(0, 0);
        }
        50% {
            transform: scale(0.7);
            transform: translate(-55%, -55%);
        }
        100% {
            transform: scale(1);
            transform: translate(-50%, -50%);
        }
    `;

    const OverLay = styled('div')`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 11;
    `;

    const Wrapper = styled('div')<WrapperProps>`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
        max-height: 100%;
        z-index: 12;
        scale: 1;
        transition: all 300ms ease-in-out;
        ${({ animation }) => animation && `animation: ${zoom} 250ms linear`};
    `;

    const ButtonDiv = styled('div')`
        position: absolute;
        right: 2rem;
        top: 1rem;
        background: rgb(63, 146, 107);
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 300ms ease-in-out;
        &:hover {
            background: #dc3535;
        }
    `;

    const Button = styled('button')`
        margin: 0;
        padding: 0;
        height: 75%;
        width: 75%;
    `;

    const close = () => {
        modal.close(id);
    };

    
    return (
    <>
        <OverLay onClick={close}></OverLay>

        <Wrapper id={id} animation={animation}>

        {customTrigger === false ? 
            (
                <ButtonDiv>
                    <Button onClick={close}>
                        <svg viewBox="0 0 512 512">
                            <path
                                fill="#fff"
                                d="M443.6 387.1 312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"
                            />
                        </svg>
                    </Button>
                </ButtonDiv>
            ) : null
        }

            {children}

        </Wrapper>
    </>
    )
}


export default ModalWrapper;