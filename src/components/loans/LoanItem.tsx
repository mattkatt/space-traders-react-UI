import React, { FC } from "react";
import styles from "./loan.module.css"


const LoanItem: FC = ({ children }) => {
    return (
        <span className={ styles.loanItem }>
            { children }
        </span>
    )
}

export default LoanItem
