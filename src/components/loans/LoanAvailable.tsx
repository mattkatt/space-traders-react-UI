import React, { FC } from "react";
import styles from "./loan.module.css"
import { STLoanAvailable } from "../../objects/loan";
import LoanTitle from "./LoanTitle";
import LoanItem from "./LoanItem";
import { CreditsHelpers } from "../../helpers";
import Button from "../ui/buttons";


interface ILoanAvailable {
    loan: STLoanAvailable
    onClaim: () => void
}

const LoanAvailable: FC<ILoanAvailable> = ({ loan, onClaim }) => {
    return (
        <figure className={ `${ styles.loan} ${ styles.loanAvailable }` }>
            <LoanTitle>{ loan.type }</LoanTitle>
            <LoanItem>Amount: { CreditsHelpers.display(loan.amount) }</LoanItem>
            <LoanItem>Rate: { CreditsHelpers.display(loan.rate) }</LoanItem>
            <LoanItem>Term: {loan.termInDays} days</LoanItem>
            <LoanItem>Collateral: { loan.collateralRequired ? 'YES' : 'NO' }</LoanItem>
            <Button onClick={ onClaim } content="Claim" />
        </figure>
    )
}

export default LoanAvailable
