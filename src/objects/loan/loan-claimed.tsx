import React, { FC } from "react";
import { STLoanClaimed } from "./loan-interface";
import Loan from "../../components/loans";


interface ILoanClaimed {
    loan: STLoanClaimed
}

const LoanClaimed: FC<ILoanClaimed> = ({ loan }) => {
    const repayLoan = () => {
        console.log('Repay LoanClaimed')
    }

    return (
        <Loan.Claimed loan={ loan } onRepay={ repayLoan } />
    )
}

export default LoanClaimed
