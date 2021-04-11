import React, { FC } from "react";
import { useAuth } from "../context/auth-context";
import { InfoMessage } from "../components/ui/messages";
import { ShipOwned } from "../objects/ship";
import { LoanClaimed } from "../objects/loan";


const DashboardView: FC = () => {
    const { auth } = useAuth()

    const renderUserShips = () => {
        return !auth.user.ships.length ? (
            <InfoMessage compact message="You have no ships" />
        ) : auth.user.ships.map(ship => {
            return <ShipOwned ship={ ship } key={ ship.id } />
        })
    }

    const renderUserLoans = () => {
        return !auth.user.loans.length ? (
            <InfoMessage compact message="You have no loans" />
        ) : auth.user.loans.map(loan => {
            return <LoanClaimed loan={ loan } key={ loan.id }/>
        })
    }

    return (
        <section>
            <h2>Current Loans:</h2>
            { renderUserLoans() }

            <h2>Current Ships:</h2>
            { renderUserShips() }
        </section>
    )
}

export default DashboardView
