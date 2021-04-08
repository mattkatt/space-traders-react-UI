import React, { FC } from "react";
import { useAuth } from "../context/auth-context";
import { Redirect, Route } from "react-router-dom";


interface IPrivateRoute {
    path: string
    exact?: boolean
}

const PrivateRoute: FC<IPrivateRoute> = ({
    children,
    path,
    exact = false,
    ...rest
}) => {
    let { auth } = useAuth();

    return (
        <Route exact={ exact } path={ path }
            { ...rest }

            render = {({ location }) =>
                auth.isAuth ? (
                    children
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: location } }} />
                )
            }
        />
    )
}

export default PrivateRoute
