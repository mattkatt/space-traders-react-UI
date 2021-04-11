import React, { FC } from "react";
import { useAuth } from "../context/auth-context";


const DashboardView: FC = () => {
    const { auth } = useAuth()
    const user = auth.user

    return (
        <section>
            <p>User: { user.username }</p>
            <p>Credits: { user.credits }</p>
            <p>Current Loans: { user.loans.length ? user.loans : 'None' }</p>
            <p>Current Ships: { user.ships.length ? user.ships : 'None' }</p>
        </section>
    )
}

export default DashboardView
