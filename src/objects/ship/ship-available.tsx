import React, { FC } from "react";
import { STShipAvailable } from "./ship-interface";
import Ship, { ShipItem } from "../../components/ui/ships";
import { Button } from "../../components/ui/buttons";
import { CreditsHelpers } from "../../helpers";


interface IShipAvailable {
    ship: STShipAvailable
}

const ShipAvailable: FC<IShipAvailable> = ({ ship }) => {
    const purchaseShip = (location: string) => {
        console.log('Buy Ship: ' + location)
    }

    const availableLocations = () => {
        const locations = ship.purchaseLocations.map(location => {
            const purchase = () => {
                purchaseShip(location.location)
            }

            return (
                <tr key={ location.location }>
                    <td>{ location.location }</td>
                    <td>{ CreditsHelpers.display(location.price) }</td>
                    <td>
                        <Button content="Buy" onClick={ purchase } />
                    </td>
                </tr>
            )
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { locations }
                </tbody>

            </table>
        )
    }

    return (
        <Ship status="Available">
            <ShipItem>Type: { ship.type }</ShipItem>
            <ShipItem>Class: { ship.class }</ShipItem>
            <ShipItem>Manufacturer: { ship.manufacturer }</ShipItem>
            <hr />

            <ShipItem>Cargo: { ship.maxCargo }</ShipItem>
            <ShipItem>Speed: { ship.speed }</ShipItem>
            <ShipItem>Weapons: { ship.weapons }</ShipItem>
            <ShipItem>Plating: { ship.plating }</ShipItem>
            <hr />

            { availableLocations() }
        </Ship>
    )
}

export default ShipAvailable
