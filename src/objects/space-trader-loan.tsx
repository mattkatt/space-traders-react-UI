import { FC } from "react";
import styles from "./space-trader-loan.module.css";
import { Button } from "../components/ui/buttons";

export interface SpaceTraderLoan {
    amount: number
    collateralRequired: boolean
    rate: number
    termInDays: number
    type: string
}

const Loan: FC<{ loan: SpaceTraderLoan }> = ({ loan }) => {
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

export default Loan
