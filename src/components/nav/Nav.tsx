import React, { FC } from 'react'
import { Link } from "react-router-dom";

import styles from './nav.module.css'
import { RouteNav, routeConfig } from "../../router";
import { useAuth } from "../../context/auth-context";

interface INav {
    routes: Array<routeConfig>
}

const Nav: FC<INav> = ({ routes }) => {
    const { auth, logout } = useAuth()

    return (
        <nav className={ styles.nav }>
            { auth.isAuth ? (
                <>
                    <RouteNav routes={ routes } activeClass={ styles.active }/>

                    <Link to="/" onClick={ logout }>
                        Logout
                    </Link>
                </>
            ) : null }
        </nav>
    )
}

export default Nav
