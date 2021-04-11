import React, { FC, useState } from "react";
import { STLoanClaimed } from "./loan-interface";
import Loan from "../../components/loans";
import { useSpaceTraderService } from "../../services";
import { useAuth } from "../../context/auth-context";


interface ILoanClaimed {
    loan: STLoanClaimed
}

const LoanClaimed: FC<ILoanClaimed> = ({ loan }) => {
    const { repayLoan } = useSpaceTraderService()
    const { updateUser } = useAuth()
    const [repaying, setRepaying] = useState(false)

    const repay = () => {
        if (repaying) {
            return
        }

        setRepaying(true)

        repayLoan(loan.id).then(updatedUser => {
            updateUser(updatedUser)
        }).catch(error => {
            alert(error.message)
        }).finally(() => {
            setRepaying(false)
        })
    }

    return (
        <Loan.Claimed loan={ loan } onRepay={ repay } />
    )
}

export default LoanClaimed
