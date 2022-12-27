import React from 'react';
import { styled } from 'goober';
import useModal  from '../../hooks/store';
import ModalContainer from '../ModalContainer';
import ModalWrapper from '../ModalWrapper';

export const Modal: React.FC = () => {
    const { modals } = useModal(); 

    const ModalDiv = styled('div')`
        width: 100%;
        height: 100%;
    `;

    return (
        <ModalDiv>
            {modals.map((m) => {   
                return <ModalWrapper 
                            animation={m?.animation}
                            customTrigger={m?.customTrigger}
                            id={m?.id}
                        >

                            <ModalContainer modal={m} />

                        </ModalWrapper>
            })}
        </ModalDiv>);
};
