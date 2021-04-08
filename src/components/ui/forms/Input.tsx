import React, { FC } from "react";
import styles from './forms.module.css'

import StringHelpers from "../../../helpers/string-helpers";

interface IInput {
    name: string
    value: any
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = ({ name, value, onChange}) => {
    return (
        <label className={ styles.formLabel }>
            <span>
                { StringHelpers.capitalise(name) }
            </span>

            <input
                className={ styles.formInput }
                name={ name }
                value={ value }
                onChange={ event => onChange(event) }
            />
        </label>
    )
}

export default Input
