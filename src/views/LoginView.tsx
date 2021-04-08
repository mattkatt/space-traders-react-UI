import React, { FC } from "react";
import UserLoginForm from "../components/forms/UserLoginForm";
import UserTokenForm from "../components/forms/UserTokenForm";


const LoginView: FC = () => {
    return (
        <>
            <h2>User Login Form</h2>
            <UserLoginForm />

            <h2>Register Username</h2>
            <UserTokenForm />
        </>
    )
}

export default LoginView
