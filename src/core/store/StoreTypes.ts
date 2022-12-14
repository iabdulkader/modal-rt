import { Modal } from "../modal/ModalTypes";

export type ModalsType = {
    modals: Modal[];
}

export type Action =
    | {
          type: ActionType.ADD_MODAL;
          modal: Modal;
      }
    | {
          type: ActionType.REMOVE_MODAL;
          id?: string;
      }

export enum ActionType {
    ADD_MODAL,
    REMOVE_MODAL
}