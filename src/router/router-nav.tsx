import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { IRouteNav } from "./router-interfaces";


const RouteNav: FC<IRouteNav> = ({ routes, activeClass }) => {
    const genNavLinks = () => {
        return routes.map(route => {
            if (['/login'].includes(route.path)) {
                return null
            }

            return (
                <NavLink exact to={ route.path } activeClassName={ activeClass } key={ route.path }>
                    { route.name }
                </NavLink>
            )
        })
    }

    return (
        <>
            { genNavLinks() }
        </>
    )
}

export default RouteNav
