export type Options = {
    animation?: true | false;
    customTrigger?: true | false;
};

export type ModalActionType = 'add' | 'remove' ;

export type CreateElementOutType = {
    modal: JSX.Element;
    key: string;
}