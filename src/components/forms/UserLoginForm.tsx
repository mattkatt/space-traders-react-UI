import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";

import Form, { Input } from "../ui/forms"
import { ErrorMessage } from "../ui/messages";

import { spaceTraderService } from "../../services/space-trader-service";
import { useAuth } from "../../context/auth-context";
import { useSettings } from "../../context/settings-context";
import { Button } from "../ui/buttons";


const UserLoginForm: FC = () => {
    const { settings } = useSettings()
    const { login } = useAuth()
    const { getUserDetails } = spaceTraderService()
    const [ formState, setFormState ] = useState({
        username: settings.defaultUser.username ?? '',
        token: settings.defaultUser.token ?? ''
    })
    const [formError, setFormError] = useState('')
    const history = useHistory()

    const onFormSubmit = async () => {
        setFormError('')

        try {
            const userDetails = await getUserDetails(formState.username, formState.token)

            login(userDetails, formState.token)
            history.push('/')
        } catch (error) {
            if (error.response) {
                setFormError(error.response.data.error.message)
            } else {
                setFormError(error.message)
            }
        }
    }

    return (
        <Form>
            <Input name="username" value={ formState.username } onChange={ event => {
                return setFormState({...formState, username: event.target.value })
            }} />

            <Input name="token" value={ formState.token } onChange={ event => {
                return setFormState({...formState, token: event.target.value })
            }} />

            <Button compact content="Login" onClick={ onFormSubmit } />

            { !formError ? null : <ErrorMessage message={ formError } compact /> }
        </Form>
    )
}

export default UserLoginForm
