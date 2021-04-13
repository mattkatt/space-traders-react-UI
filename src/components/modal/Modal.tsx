import React, { FC, MouseEvent, ReactElement, useEffect, useState } from "react";
import styles from "./modal.module.css"

interface IModal {
    title?: string
    content?: ReactElement
    footer?: ReactElement
    display?: boolean,
    onDismiss?: () => void
}

const Modal: FC<IModal> = (props) => {
    const [modalState, setModalState] = useState(false)

    useEffect(() => {
        if (props.display) {
            setModalState(props.display)
        }
    }, [props.display])


    const dismissModal = () => {
        setModalState(false)

        if (props.onDismiss) {
            props.onDismiss()
        }
    }

    const clickOverlay = (event: MouseEvent) => {
        event.preventDefault()

        if (event.target=== event.currentTarget) {
            dismissModal()
        }
    }

    const modalTitle = !props.title ? null : (
        <h3 className={ styles.modalTitle }>
            { props.title }
        </h3>
    )

    const modalFooter = !props.footer ? null : (
        <div className={ styles.modalFooter }>
            { props.footer }
        </div>
    )

    return !modalState ? null : (
        <div className={ styles.modalOverlay } onClick={ clickOverlay }>
            <figure className={ styles.modal }>
                { modalTitle }

                <div className={ styles.modalBody }>
                    { props.content ?? props.children }
                </div>

                { modalFooter }
            </figure>
        </div>
    )
}

export default Modal
