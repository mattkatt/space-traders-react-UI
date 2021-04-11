import React, { FC } from "react";
import styles from './messages.module.css'


export interface IMessage {
    message?: string
    compact?: boolean
}

interface IBasicMessage extends IMessage {
    type: "Info" | "Error" | "Success"
}

const BasicMessage: FC<IBasicMessage> = ({ message, type, compact = false, children }) => {
    let classes = styles.message

    switch (type) {
        case "Info":
            classes += ` ${styles.infoMessage}`
            break
        case "Error":
            classes += ` ${styles.errorMessage}`
            break
        case "Success":
            classes += ` ${styles.successMessage}`
    }

    if (compact) {
        classes += ` ${styles.messageCompact}`
    }

    return (
        <div className={ classes }>
            { message ?? children }
        </div>
    )
}

export default BasicMessage
