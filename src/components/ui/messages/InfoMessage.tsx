import React, { FC } from "react";
import BasicMessage, { IMessage } from "./BasicMessage";


const InfoMessage: FC<IMessage> = ({ message, compact, children }) => {
    return (
        <BasicMessage type="Info" message={ message } compact={ compact }>
            { children }
        </BasicMessage>
    )
}

export default InfoMessage
