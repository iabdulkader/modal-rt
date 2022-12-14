import { ReactElement } from 'react';
import { dispatch, useStore} from '../store';
import wrapper from '../../hooks/wrapper';
import { CreateElementOutType, ModalActionType, Options } from './ModalTypes';
import { ActionType } from '../store/StoreTypes';

type ModalHandler = (node: ReactElement, options?: Options) => void;

const uid = (() => {
    let i = 0;
    return () => `${i++}`;
})();

const createElement = (node: ReactElement, options?: Options): CreateElementOutType  => {
    const key = uid();

    const modal: JSX.Element = wrapper(node, key, options);
    return { modal, key };
};

const createHandler = (type?: ModalActionType): ModalHandler => (node, options) => {
                const { modal, key } = createElement(node, options);
                dispatch({ type: ActionType.ADD_MODAL, modal });

                return key;
            };

const modal = (modal: JSX.Element, options?: Options) => createHandler('add')(modal, options);

modal.close = (id?: string): void => {
    dispatch({
        type: ActionType.REMOVE_MODAL,
        id
    });
};

export { modal };
