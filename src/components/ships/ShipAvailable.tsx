import React, { FC } from "react";
import styles from "./ship.module.css";
import { STShipAvailable } from "../../objects/ship";
import ShipItem from "./ShipItem";
import ShipTitle from "./ShipTitle";
import { CreditsHelpers } from "../../helpers";
import { Button } from "../ui/buttons";

interface IShip {
    ship: STShipAvailable
    onPurchase: (location: string) => void
}

const ShipAvailable: FC<IShip> = ({ ship, onPurchase }) => {
    const locations = ship.purchaseLocations.map(location => (
        <tr key={ location.location }>
            <td>{ location.location }</td>
            <td>{ CreditsHelpers.display(location.price) }</td>
            <td>
                <Button content="Buy" onClick={ () => onPurchase(location.location) } />
            </td>
        </tr>
    ))

    return (
        <figure className={ `${ styles.ship } ${ styles.shipAvailable }` }>
            <ShipTitle>{ ship.manufacturer } { ship.class }</ShipTitle>
            <ShipItem>{ ship.type }</ShipItem>
            <hr/>

            <ShipItem>Speed: { ship.speed }</ShipItem>
            <ShipItem>Weapons: { ship.weapons }</ShipItem>
            <ShipItem>Plating: { ship.plating }</ShipItem>
            <ShipItem>Cargo Space: { ship.maxCargo }</ShipItem>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th colSpan={ 99 }>Location</th>
                    </tr>
                </thead>
                <tbody>
                    { locations }
                </tbody>
            </table>
        </figure>
    )
}

export default ShipAvailable
