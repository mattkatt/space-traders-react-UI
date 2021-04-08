import React, { FC } from "react";
import { Switch } from "react-router-dom";
import { routerConfig } from "./router";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";

const RouteSwitch: FC<routerConfig> = ({ routes }) => {
    return (
        <Switch>
            { routes.map(View => {
                if (View.private) {
                    return (
                        <PrivateRoute exact path={ View.path } key={ View.path }>
                            <View.Render />
                        </PrivateRoute>
                    )
                }

                return (
                    <PublicRoute exact path={ View.path } key={ View.path }>
                        <View.Render />
                    </PublicRoute>
                )
            }) }
        </Switch>
    )
}

export default RouteSwitch
