import React, { FC, useState } from "react";
import { STShipAvailable } from "./ship-interface";
import Ship, { ShipItem } from "../../components/ui/ships";
import { Button } from "../../components/ui/buttons";
import { CreditsHelpers } from "../../helpers";
import { useSpaceTraderService } from "../../services";
import { useAuth } from "../../context/auth-context";


interface IShipAvailable {
    ship: STShipAvailable
}

const ShipAvailable: FC<IShipAvailable> = ({ ship }) => {
    const { purchaseShip } = useSpaceTraderService()
    const { updateUser } = useAuth()
    const [purchasing, setPurchasing] = useState(false)

    const purchase = (location: string) => {
        if (purchasing) {
            return
        }

        setPurchasing(true)

        purchaseShip(location, ship.type).then(updatedUser => {
            updateUser(updatedUser)
        }).catch(error => {
            alert(error.response.data.error.message)
        }).finally(() => {
            setPurchasing(false)
        })
    }

    const availableLocations = () => {
        const locations = ship.purchaseLocations.map(location => {
            return (
                <tr key={ location.location }>
                    <td>{ location.location }</td>
                    <td>{ CreditsHelpers.display(location.price) }</td>
                    <td>
                        <Button content="Buy" onClick={ () => purchase(location.location) } />
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
