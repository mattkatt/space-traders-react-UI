import React, { FC, useEffect, useState } from "react";
import { spaceTraderService } from "../services/space-trader-service";
import { useAuth } from "../context/auth-context";
import Loan, { SpaceTraderLoan } from "../objects/space-trader-loan";
import { InfoMessage } from "../components/ui/messages";

const LoansView: FC = () => {
    const { auth } = useAuth()
    const { getAvailableLoans } = spaceTraderService()
    const [ queryAvailableLoans, setQueryAvailableLoans] = useState(false)
    const [ availableLoans, setAvailableLoans ] = useState<Array<SpaceTraderLoan>>([])

    useEffect(() => {
        if (!queryAvailableLoans) {
            getAvailableLoans(auth.token).then(loans => {
                setAvailableLoans(loans)
                setQueryAvailableLoans(true)
            })
        }
    })

    const renderUserLoans = () => {
        if (!auth.user.loans.length) {
            return (
                <InfoMessage compact message="You have no loans" />
            )
        }

        return auth.user.loans.map(loan => {
            return (
                <Loan loan={ loan } key={ loan.type }/>
            )
        })
    }

    const renderAvailableLoans = () => {
        return availableLoans.map(loan => {
            return (
                <Loan loan={ loan } key={ loan.type } />
            )
        })
    }

    return (
        <section>
            <h2>Your Loans</h2>
            { renderUserLoans() }

            <h2>Available Loans</h2>
            { renderAvailableLoans() }
        </section>
    )
}

export default LoansView
