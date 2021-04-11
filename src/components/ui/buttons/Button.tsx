import React, { FC } from "react";
import styles from './buttons.module.css'


export interface IButton {
    content?: string
    compact?: boolean
    onClick: () => void
}

interface IBasicButton extends IButton {
    type?: "Positive" | "Negative"
}

const Button: FC<IBasicButton> = ({ content, type, compact, onClick, children }) => {
    let classes = styles.button

    switch (type) {
        case "Positive":
            classes += ` ${ styles.positiveButton }`
            break
        case "Negative":
            classes += ` ${ styles.negativeButton }`
            break
    }

    if (compact) {
        classes += ` ${ styles.buttonCompact }`
    }

    return (
        <button type="button" className={ classes } onClick={ onClick }>
            { content ?? children }
        </button>
    )
}

export default Button
