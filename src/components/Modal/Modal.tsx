import React, { Fragment } from 'react';
import useModal  from '../../hooks/store';
import ModalContainer from '../ModalContainer';
import ModalWrapper from '../ModalWrapper';

export const Modal: React.FC = () => {
    const { modals } = useModal(); 

    return (
        <Fragment>
            {modals.map((m) => {   
                return <ModalWrapper 
                            animation={m?.animation!.toString()}
                            customTrigger={m?.customTrigger}
                            id={m?.id}
                            key={m?.id}
                        >

                            <ModalContainer modal={m} />

                        </ModalWrapper>
            })}
        </Fragment>);
};
