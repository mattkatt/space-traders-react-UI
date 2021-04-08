import React, { FC } from "react";
import { STShipOwned } from "./ship-interface";
import styles from './ship.module.css'


interface IShipOwned {
    ship: STShipOwned
}

const ShipOwned: FC<IShipOwned> = ({ ship }) => {
    return (
        <figure className={ styles.ship }>

        </figure>
    )
}

export default ShipOwned
