import React from "react"
import { Modal, resolveValue } from "../../core/modal/ModalTypes"
import { ModalContainerProps } from "./ModalContainerProps"

export const ModalContainer: React.FC<ModalContainerProps> = ({ modal, children }) => {
    const modalContent = (<>{resolveValue(modal.modal, modal)}</>)

    return (
        <>
            {typeof children === 'function' ? (
                children({
                modalContent,
                })
            ) : (
                <>
                {modalContent}
                </>
            )}
        </>
        
    )
}   