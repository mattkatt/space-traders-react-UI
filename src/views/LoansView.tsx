import React, { FC, useEffect, useState } from "react";
import { useSpaceTraderService } from "../services";
import { useAuth } from "../context/auth-context";
import { LoanAvailable, LoanClaimed, STLoanAvailable } from "../objects/loan";
import { InfoMessage } from "../components/ui/messages";


const LoansView: FC = () => {
    const { auth } = useAuth()
    const { getAvailableLoans } = useSpaceTraderService()
    const [ queryAvailableLoans, setQueryAvailableLoans] = useState(false)
    const [ availableLoans, setAvailableLoans ] = useState<STLoanAvailable[]>([])

    useEffect(() => {
        if (!queryAvailableLoans) {
            getAvailableLoans().then(loans => {
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
                <LoanClaimed loan={ loan } key={ loan.id }/>
            )
        })
    }

    const renderAvailableLoans = () => {
        return availableLoans.map(loan => {
            return (
                <LoanAvailable loan={ loan } key={ loan.type } />
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
