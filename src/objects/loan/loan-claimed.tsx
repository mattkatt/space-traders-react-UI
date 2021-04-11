import React, { FC } from "react";
import { STLoanClaimed } from "./loan-interface";
import { Button } from "../../components/ui/buttons";
import Loan, { LoanItem, LoanTitle } from "../../components/ui/loans";
import { CreditsHelpers } from "../../helpers";


interface ILoanClaimed {
    loan: STLoanClaimed
}

const LoanClaimed: FC<ILoanClaimed> = ({ loan }) => {
    const dueDate = new Date(loan.due)

    const repayLoan = () => {
        console.log('Repay Loan')
    }

    return (
        <Loan status="Claimed">
            <LoanTitle>{ loan.type }</LoanTitle>
            <LoanItem>Loan Amount: { CreditsHelpers.display(loan.repaymentAmount) }</LoanItem>
            <LoanItem>Due Date: { dueDate.toDateString() }</LoanItem>
            <LoanItem>Status: { loan.status }</LoanItem>
            <Button onClick={ repayLoan } content="Repay Loan" />
        </Loan>
    )
}

export default LoanClaimed
