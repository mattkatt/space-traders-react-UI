import React, { FC, PropsWithChildren } from "react";
import BasicMessage, { IMessage } from "./BasicMessage";

const ErrorMessage: FC<PropsWithChildren<IMessage>> = ({
    message,
    compact,
    children
}) => {
    return (
        <BasicMessage type="Error" message={ message} compact={ compact }>
            { children }
        </BasicMessage>
    )
}

export default ErrorMessage
