import React, { FC } from "react";
import { STShipOwned } from "./ship-interface";
import Ship from "../../components/ships";


interface IShipOwned {
    ship: STShipOwned
}

const ShipOwned: FC<IShipOwned> = ({ ship }) => {
    return (
        <Ship.Owned ship={ ship } />
    )
}

export default ShipOwned
