import React, { FC } from "react";
import { useAuth } from "../context/auth-context";


const DashboardView: FC = () => {
    const { auth } = useAuth()

    return (
        <section>
            <p>User: { auth.user.username }</p>
            <p>Credits: { auth.user.credits }</p>
            <p>Current Loans: { auth.user.loans.length ? auth.user.loans : 'None' }</p>
            <p>Current Ships: { auth.user.ships.length ? auth.user.ships : 'None' }</p>
        </section>
    )
}

export default DashboardView
