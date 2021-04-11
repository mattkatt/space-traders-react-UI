import React, { FC } from "react";
import { STLoanAvailable } from "./loan-interface";
import { Button } from "../../components/ui/buttons";
import Loan, { LoanItem, LoanTitle } from "../../components/loans";
import { CreditsHelpers } from "../../helpers";


interface ILoanAvailable {
    loan: STLoanAvailable
}

const LoanAvailable: FC<ILoanAvailable> = ({ loan }) => {
    const acceptLoan = () => {
        console.log('Loan Accepted')
    }

    return (
        <Loan status="Available">
            <LoanTitle>{ loan.type }</LoanTitle>
            <LoanItem>Loan Amount: { CreditsHelpers.display(loan.amount) }</LoanItem>
            <LoanItem>Rate: { CreditsHelpers.display(loan.rate) }</LoanItem>
            <LoanItem>Term: {loan.termInDays} days</LoanItem>
            <LoanItem>Collateral: { loan.collateralRequired ? 'YES' : 'NO' }</LoanItem>
            <Button onClick={ acceptLoan } content="Accept Loan"/>
        </Loan>
    )
}

export default LoanAvailable
