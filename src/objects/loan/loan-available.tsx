import React, { FC, useState } from "react";
import { STLoanAvailable } from "./loan-interface";
import Loan from "../../components/loans";
import { useSpaceTraderService } from "../../services";
import { useAuth } from "../../context/auth-context";


interface ILoanAvailable {
    loan: STLoanAvailable
}

const LoanAvailable: FC<ILoanAvailable> = ({ loan }) => {
    const { claimLoan } = useSpaceTraderService()
    const { updateUser } = useAuth()
    const [claiming, setClaiming] = useState(false)

    const claim = () => {
        if (claiming) {
            return
        }

        setClaiming(true)

        claimLoan(loan.type).then(updatedUser => {
            updateUser(updatedUser)
        }).catch(error => {
            alert(error.message)
        }).finally(() => {
            setClaiming(false)
        })
    }

    return (
        <Loan.Available loan={ loan } onClaim={ claim }/>
    )
}

export default LoanAvailable
