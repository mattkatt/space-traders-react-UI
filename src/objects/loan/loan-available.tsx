import React, { FC } from "react";
import { STLoanAvailable } from "./loan-interface";
import styles from "./loan.module.css";
import { Button } from "../../components/ui/buttons";


interface ILoanAvailable {
    loan: STLoanAvailable
}

const LoanAvailable: FC<ILoanAvailable> = ({ loan }) => {
    const acceptLoan = () => {
        console.log('Loan Accepted')
    }

    return (
        <figure className={ styles.loan }>
            <h3 className={ styles.loanTitle }>
                { loan.type }
            </h3>
            <span>Loan Amount: { loan.amount }</span>
            <span>Rate: { loan.rate }</span>
            <span>Term: {loan.termInDays} days</span>
            <span>Collateral: { loan.collateralRequired ? 'YES' : 'NO' }</span>
            <Button onClick={ acceptLoan } content="Accept Loan"/>
        </figure>
    )
}

export default LoanAvailable
