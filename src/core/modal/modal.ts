import { dispatch } from '../store';
import { Modal, ModalActionType, ModalHandler, ModalInputType, Options } from './ModalTypes';
import { ActionType } from '../store/StoreTypes';



const uid = (() => {
    let i = 0;
    return () => `${i++}`;
})();

const createModal = (modal: ModalInputType, options?: Options): Modal  => {
    const id = uid();

    return { modal, id, animation: options?.animation, customTrigger: options?.customTrigger, ...options };
};

const createHandler = (type?: ModalActionType): ModalHandler => (node, options) => {
                const modal = createModal(node, options);
                dispatch({ type: ActionType.ADD_MODAL, modal });
               
                return modal.id;
            };

const modal = (modal: ModalInputType, options?: Options) => createHandler('add')(modal, options);

modal.close = (id?: string): void => {
    dispatch({
        type: ActionType.REMOVE_MODAL,
        id
    });
};

export { modal };
