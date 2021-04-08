import React, { FC } from "react";
import { routerConfig } from "./browser-router";
import { NavLink } from "react-router-dom";


interface IRouteNav extends routerConfig {
    activeClass?: string
}

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
