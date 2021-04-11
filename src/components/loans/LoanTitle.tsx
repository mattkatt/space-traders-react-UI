import React, { FC } from "react";
import styles from "./loan.module.css"


const LoanTitle: FC = ({ children }) => {
    return (
        <h3 className={ styles.loanTitle }>
            { children }
        </h3>
    )
}

export default LoanTitle
