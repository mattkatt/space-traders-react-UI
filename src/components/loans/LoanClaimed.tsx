import React, { FC } from "react";
import styles from "./loan.module.css"
import { STLoanClaimed } from "../../objects/loan";
import LoanTitle from "./LoanTitle";
import LoanItem from './LoanItem'
import { CreditsHelpers } from "../../helpers";
import Button from "../ui/buttons";


interface ILoanClaimed {
    loan: STLoanClaimed
    onRepay: () => void
}

const LoanClaimed: FC<ILoanClaimed> = ({ loan, onRepay }) => {
    const dueDate = new Date(loan.due)

    return (
        <figure className={ `${ styles.loan } ${ styles.loanClaimed }` }>
            <LoanTitle>{ loan.type }</LoanTitle>
            <LoanItem>Amount: { CreditsHelpers.display(loan.repaymentAmount) }</LoanItem>
            <LoanItem>Due Date: { dueDate.toDateString() }</LoanItem>
            <LoanItem>Status: { loan.status }</LoanItem>
            <Button onClick={ onRepay } content="Repay" />
        </figure>
    )
}

export default LoanClaimed
