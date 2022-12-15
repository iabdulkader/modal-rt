import React from 'react';
import { Fragment } from 'react';
import useModal  from '../../hooks/store';
import ModalContainer from '../ModalContainer';
import ModalWrapper from '../ModalWrapper';

export const Modal: React.FC = () => {
    const { modals } = useModal(); 
    

    return (
        <Fragment>
            {modals.map((m) => {   
                return <ModalWrapper 
                            animation={m?.animation}
                            customTrigger={m?.customTrigger}
                            id={m?.id}
                        >

                            <ModalContainer modal={m} />

                        </ModalWrapper>
            })}
        </Fragment>);
};