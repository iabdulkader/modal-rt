
export type ModalsType = {
    modals: JSX.Element[];
}

export type Action =
    | {
          type: ActionType.ADD_MODAL;
          modal: JSX.Element;
      }
    | {
          type: ActionType.REMOVE_MODAL;
          id?: string;
      }

export enum ActionType {
    ADD_MODAL,
    REMOVE_MODAL
}