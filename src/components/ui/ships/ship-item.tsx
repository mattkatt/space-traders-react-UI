import React, { FC } from "react";
import styles from "./ship.module.css"


const ShipItem: FC = ({ children }) => {
    return (
        <span className={ styles.shipItem }>
            { children }
        </span>
    )
}

export default ShipItem
