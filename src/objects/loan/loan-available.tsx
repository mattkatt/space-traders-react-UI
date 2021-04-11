import React, { FC } from "react";
import { STLoanAvailable } from "./loan-interface";
import Loan from "../../components/loans";


interface ILoanAvailable {
    loan: STLoanAvailable
}

const LoanAvailable: FC<ILoanAvailable> = ({ loan }) => {
    const claimLoan = () => {
        console.log('LoanClaimed Accepted')
    }

    return (
        <Loan.Available loan={ loan } onClaim={ claimLoan }/>
    )
}

export default LoanAvailable
