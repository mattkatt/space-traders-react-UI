import React, { FC } from "react";
import styles from "./loan.module.css"


interface ILoan {
    status: "Available" | "Claimed"
}

const Loan: FC<ILoan> = ({ status, children }) => {
    const classNames = () => {
        let name = styles.loan

        switch (status) {
            case "Available":
                return `${ name} ${ styles.loanAvailable }`
            case "Claimed":
                return `${ name} ${ styles.loanClaimed }`
        }
    }

    return (
        <figure className={ classNames() }>
            { children }
        </figure>
    )
}

export default Loan
