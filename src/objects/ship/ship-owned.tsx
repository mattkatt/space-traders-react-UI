import React, { FC } from "react";
import { STShipOwned } from "./ship-interface";
import Ship, { ShipItem } from "../../components/ui/ships";


interface IShipOwned {
    ship: STShipOwned
}

const ShipOwned: FC<IShipOwned> = ({ ship }) => {
    const currentSpace = `${ ship.cargo.length }/${ ship.maxCargo }`

    const renderCargo = () => {
        const noGoods = (
            <tr>
                <td><i>Empty</i></td>
            </tr>
        )

        const goods = ship.cargo.map(goods => {
            return (
                <tr>
                    <td>{ goods.good }</td>
                    <td>{ goods.quantity }</td>
                    <td>{ goods.totalVolume }</td>
                </tr>
            )
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan={ 99 }>Goods</th>
                    </tr>
                </thead>
                <tbody>
                    { ship.cargo.length ? goods : noGoods }
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

            <ShipItem>Current Location: { ship.location } ({ ship.x }, { ship.y })</ShipItem>
            <ShipItem>Current Cargo ({ currentSpace }):</ShipItem>

            { renderCargo() }
        </Ship>
    )
}

export default ShipOwned
