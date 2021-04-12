import React, { FC, useEffect, useState } from "react";
import { useSpaceTraderService } from "../services";
import { useAuth } from "../context/auth-context";
import { LoanAvailable, LoanClaimed, STLoanAvailable } from "../objects/loan";
import { InfoMessage } from "../components/ui/messages";
import { ItemContainer } from "../components/ui/containers";


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
        return auth.user.loans.map(loan => {
            return (
                <LoanClaimed loan={ loan } key={ loan.id }/>
            )
        })
    }

    const renderAvailableLoans = () => {
        if (!queryAvailableLoans) {
            return <p style={{ margin: "8px" }}>Getting Loans...</p>
        }

        return availableLoans.map(loan => {
            return (
                <LoanAvailable loan={ loan } key={ loan.type } />
            )
        })
    }

    return (
        <section>
            <h2>Your Loans</h2>
            { !auth.user.loans.length ? (
                <InfoMessage compact message="You have no loans" />
            ) : (
                <ItemContainer>
                    { renderUserLoans() }
                </ItemContainer>
            )}

            <h2>Available Loans</h2>
            { !availableLoans.length ? (
                <InfoMessage compact message="No loans available" />
            ) : (
                <ItemContainer>
                    { renderAvailableLoans() }
                </ItemContainer>
            )}
        </section>
    )
}

export default LoansView
