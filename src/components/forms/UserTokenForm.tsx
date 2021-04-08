import React, { FC, useState } from "react";
import { spaceTraderService } from "../../services/space-trader-service";
import { ErrorMessage, InfoMessage } from "../ui/messages";

const UserTokenForm: FC = () => {
    const { generateUserToken } = spaceTraderService()
    const [username, setUsername] = useState('')
    const [token, setToken] = useState('')
    const [formError, setFormError] = useState('')

    const onFormSubmit = async () => {
        setFormError('')

        try {
            const returnedToken = await generateUserToken(username)
            setToken(returnedToken)
        } catch (error) {
            console.log(error)

            if (error.response) {
                setFormError(error.response.data.error.message)
            } else {
                setFormError(error.message)
            }
        }
    }

    return (
        <>
            <form>
                <input
                    name="username"
                    value={ username }
                    onChange={ event => setUsername(event.target.value) }
                />

                <button type="button" onClick={ onFormSubmit }>
                    Submit
                </button>
            </form>

            { !token ? null : <InfoMessage message={ `Token: ${token}`} compact /> }
            { !formError ? null : <ErrorMessage message={ formError } compact /> }
        </>
    )
}

export default UserTokenForm
