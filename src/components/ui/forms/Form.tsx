import React, { FC } from "react";
import styles from './forms.module.css'

const Form: FC = ({ children }) => {
    return (
        <form className={ styles.form }>
            { children }
        </form>
    )
}

export default Form
