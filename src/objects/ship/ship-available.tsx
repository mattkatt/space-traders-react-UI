import React, { FC, useState } from "react";
import { STShipAvailable } from "./ship-interface";
import Ship from "../../components/ships";
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
            alert(error.message)
        }).finally(() => {
            setPurchasing(false)
        })
    }

    return (
        <Ship.Available ship={ ship } onPurchase={ purchase } />
    )
}

export default ShipAvailable
