import React from 'react';
import { Fragment } from 'react';
import useModal  from '../../hooks/store';

export const Modal: React.FC = () => {
    const { modals } = useModal(); 
    

    return <Fragment>{modals}</Fragment>;
};