import React, { FC } from "react";
import { useAuth } from "../context/auth-context";
import { InfoMessage } from "../components/ui/messages";
import { ShipOwned } from "../objects/ship";
import { LoanClaimed } from "../objects/loan";
import { ItemContainer } from "../components/ui/containers";


const DashboardView: FC = () => {
    const { auth } = useAuth()

    const renderUserLoans = () => {
        return auth.user.loans.map(loan => {
            return (
                <LoanClaimed loan={ loan } key={ loan.id }/>
            )
        })
    }

    const renderUserShips = () => {


        return Object.values(auth.user.ships).map(ship => {
            return <ShipOwned ship={ ship } key={ ship.id } />
        })
    }

    return (
        <section>
            <h2>Current Loans:</h2>
            { !auth.user.loans.length ? (
                <InfoMessage compact message="You have no loans" />
            ) : (
                <ItemContainer>
                    { renderUserLoans() }
                </ItemContainer>
            )}

            <h2>Current Ships:</h2>
            { !auth.user.ships.length ? (
                <InfoMessage compact message="You have no ships" />
            ) : (
                <ItemContainer>
                    { renderUserShips() }
                </ItemContainer>
            )}
        </section>
    )
}

export default DashboardView
