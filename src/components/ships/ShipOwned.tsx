import React, { FC, useState } from "react";
import styles from "./ship.module.css";
import { STShipOwned } from "../../objects/ship";
import ShipItem from "./ShipItem";
import ShipTitle from "./ShipTitle";
import Modal from "../modal";
import Market from "../market";
import Button from "../ui/buttons";
import { VolumeHelpers } from "../../helpers";


interface IShipOwned {
    ship: STShipOwned
}

const ShipOwned: FC<IShipOwned> = ({ ship }) => {
    const [modal, setModal] = useState(false)

    const currentSpace = ( ) => {
        let currentVolume = 0

        ship.cargo.forEach(item => {
            currentVolume += item.totalVolume
        })

        return `${ currentVolume }/${ ship.maxCargo }`
    }

    const goods = ship.cargo.map(goods => (
        <tr key={ goods.good }>
            <td>{ goods.good }</td>
            <td>{ goods.quantity }</td>
            <td>{ VolumeHelpers.display(goods.totalVolume) }</td>
        </tr>
    ))

    return (
        <figure className={ `${ styles.ship } ${ styles.shipOwned }` }>
            <ShipTitle>{ ship.manufacturer } { ship.class }</ShipTitle>
            <ShipItem>{ ship.type }</ShipItem>
            <hr/>

            <ShipItem>Speed: { ship.speed }</ShipItem>
            <ShipItem>Weapons: { ship.weapons }</ShipItem>
            <ShipItem>Plating: { ship.plating }</ShipItem>
            <hr />

            <ShipItem>Current Location: { ship.location } ({ ship.x }, { ship.y })</ShipItem>

            <table>
                <thead>
                    <tr>
                        <th colSpan={ 99 }>Cargo ({ currentSpace() })</th>
                    </tr>
                </thead>
                <tbody>
                    { ship.cargo.length ? goods : (
                        <tr>
                            <td><i>Empty</i></td>
                        </tr>
                    ) }
                </tbody>
            </table>

            { !ship.location ? null : (
                <>
                    <hr />
                    <Button
                        onClick={ () => setModal(true) }
                        content="Show Market"
                    />

                    <Modal display={ modal } onDismiss={ () => setModal(false) } title="Market">
                        <Market location={ ship.location } shipId={ ship.id } />
                    </Modal>
                </>
            )}
        </figure>
    )
}

export default ShipOwned
