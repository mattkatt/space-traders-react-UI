import React, { FC } from "react";
import { STLoanClaimed } from "./loan-interface";
import styles from './loan.module.css'
import { Button } from "../../components/ui/buttons";


interface ILoanClaimed {
    loan: STLoanClaimed
}

const LoanClaimed: FC<ILoanClaimed> = ({ loan }) => {
    const dueDate = new Date(loan.due)

    const repayLoan = () => {
        console.log('Repay Loan')
    }

    return (
        <figure className={ styles.loan }>
            <h3 className={ styles.loanTitle }>
                { loan.type }
            </h3>
            <span>Loan Amount: { loan.repaymentAmount }</span>
            <span>Due Date: { dueDate.toDateString() }</span>
            <span>Status: { loan.status } days</span>
            <Button onClick={ repayLoan } content="Repay Loan" />
        </figure>
    )
}

export default LoanClaimed
