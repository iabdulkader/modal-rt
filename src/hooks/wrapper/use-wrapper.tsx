import React from 'react';
import ModalWrapper  from '../../components/ModalWrapper';
import modal from '../../core/modal';
import { Options } from '../../core/modal/ModalTypes';



export const wrapper = (node: JSX.Element,key: string, options?: Options ): JSX.Element => {
    
    const close = () => {
        modal.close(key);
    };

    const element = (
        <ModalWrapper 
            key={key} 
            id={key} 
            animation={options?.animation} 
            close={close} 
            customTrigger={options?.customTrigger}
        >
            {node}
        </ModalWrapper>
    );

    return element;
};
