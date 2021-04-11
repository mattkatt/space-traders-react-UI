import React, { FC } from "react";
import styles from "./ship.module.css";


const ShipTitle: FC = ({ children }) => {
    return (
        <h3 className={ styles.shipTitle }>
            { children }
        </h3>
    )
}

export default ShipTitle
