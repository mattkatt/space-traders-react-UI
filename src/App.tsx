import React, { useEffect, useState } from 'react';
import './App.css';
import BrowserRouter, { routeConfig } from "./router";
import { useAuth } from "./context/auth-context";
import { DashboardView, LoginView, LoansView } from "./views"


function App() {
    const [checkAuth, setCheckAuth] = useState(false)
    const { checkLocalAuth } = useAuth()
    const spaceTraderRoutes: routeConfig[] = [
        {
            name: "Login",
            path: "/login",
            Render: LoginView,
            private: false
        },
        {
            name: "Dashboard",
            path: "/",
            Render: DashboardView,
            private: true
        },
        {
            name: "Loans",
            path: "/loans",
            Render: LoansView,
            private: true
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
                <BrowserRouter routes={ spaceTraderRoutes } />
            )}
        </>
    )
}

export default App;
