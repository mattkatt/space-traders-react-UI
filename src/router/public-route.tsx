import React, { FC } from "react";
import { useAuth } from "../context/auth-context";
import { Redirect, Route } from "react-router-dom";

interface IPublicRoute {
    path: string
    exact?: boolean
}

const PublicRoute: FC<IPublicRoute> = ({
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
                   !auth.isAuth ? (
                       children
                   ) : (
                       <Redirect to={{ pathname: "/", state: { from: location } }} />
                   )
               }
        />
    )
}

export default PublicRoute
