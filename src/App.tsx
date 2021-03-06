import React, { useEffect, useState } from 'react';
import './App.css';
import { Router, routeConfig } from "./router";
import { useAuth } from "./context/auth-context";
import { DashboardView, LoginView, LoansView, ShipsView } from "./views"


function App() {
    const [checkAuth, setCheckAuth] = useState(false)
    const { checkLocalAuth } = useAuth()
    const spaceTraderRoutes: routeConfig[] = [
        {
            name: "Login",
            path: "/login",
            Render: LoginView,
            private: false,
        },
        {
            name: "Dashboard",
            path: "/",
            Render: DashboardView,
            private: true,
        },
        {
            name: "Loans",
            path: "/loans",
            Render: LoansView,
            private: true,
        },
        {
            name: "Ships",
            path: "/ships",
            Render: ShipsView,
            private: true,
        }
    ]

    useEffect(() => {
        if (!checkAuth) {
            checkLocalAuth()
            setCheckAuth(true)
        }
    }, [checkAuth, checkLocalAuth])

    return (
        <>
            { !checkAuth ? (
                <p>Checking...</p>
            ) : (
                <Router routes={ spaceTraderRoutes } />
            )}
        </>
    )
}

export default App;
