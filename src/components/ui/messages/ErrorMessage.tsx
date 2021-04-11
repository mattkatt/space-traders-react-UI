import React, { FC } from "react";
import BasicMessage, { IMessage } from "./BasicMessage";


const ErrorMessage: FC<IMessage> = ({ message, compact, children }) => {
    return (
        <BasicMessage type="Error" message={ message} compact={ compact }>
            { children }
        </BasicMessage>
    )
}

export default ErrorMessage
