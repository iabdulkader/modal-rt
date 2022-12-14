import { useState, useEffect } from 'react';
import { Modal } from '../modal/ModalTypes';
import { Action, ActionType, ModalsType } from './StoreTypes';

export const reducer = (state: ModalsType, action: Action): ModalsType => {
    switch (action.type) {
        case ActionType.ADD_MODAL:
            return {
                ...state,
                modals: [action.modal, ...state.modals]
            };

        case ActionType.REMOVE_MODAL:
            if(action.id === undefined){
                return {
                    ...state,
                    modals: []
                };
            }

            return {
                ...state,
                modals: state.modals.filter((modal: Modal) => modal.id !== action.id),
            };

        default:
            return state;
    }
};


const listeners: Array<(state: ModalsType) => void> = [];

let memoryState: ModalsType = { modals: [] };

export const dispatch = (action: Action) => {
    memoryState = reducer(memoryState, action);

    listeners.forEach((listener) => {
        listener(memoryState);
    });
};

export const useStore = (): ModalsType => {
    const [state, setState] = useState<ModalsType>(memoryState);

    useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [state]);

    return {
        ...state,
        modals: state.modals
    };
};