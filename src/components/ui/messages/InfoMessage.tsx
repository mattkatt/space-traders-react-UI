import React, { FC, PropsWithChildren } from "react";
import BasicMessage, { IMessage } from "./BasicMessage";

const InfoMessage: FC<PropsWithChildren<IMessage>> = ({
    message,
    compact,
    children
}) => {
    return (
        <BasicMessage type="Info" message={ message } compact={ compact }>
            { children }
        </BasicMessage>
    )
}

export default InfoMessage
