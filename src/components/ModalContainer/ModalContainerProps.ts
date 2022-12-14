import { Modal, Renderable } from "../../core/modal/ModalTypes";

export interface ModalContainerProps {
    modal: Modal;
    children?: (components: {
        modalContent: Renderable;
      }) => Renderable;
};