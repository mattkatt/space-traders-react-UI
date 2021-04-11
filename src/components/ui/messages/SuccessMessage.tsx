import React, { FC } from "react";
import BasicMessage, { IMessage } from "./BasicMessage";


const SuccessMessage: FC<IMessage> = ({ message, compact, children }) => {
    return (
        <BasicMessage type="Success" message={ message} compact={ compact }>
            { children }
        </BasicMessage>
    )
}

export default SuccessMessage
