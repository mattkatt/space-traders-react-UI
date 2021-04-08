import React, { FC } from "react";
import { STShipAvailable } from "./ship-interface";
import styles from './ship.module.css'


interface IShipAvailable {
    ship: STShipAvailable
}

const ShipAvailable: FC<IShipAvailable> = ({ ship }) => {
    return (
        <figure className={ styles.ship }>

        </figure>
    )
}

export default ShipAvailable
