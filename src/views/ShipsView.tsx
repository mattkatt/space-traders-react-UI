import React, { FC, useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { ShipAvailable, ShipOwned, STShipAvailable } from "../objects/ship";
import { useSpaceTraderService } from "../services";
import { InfoMessage } from "../components/ui/messages";


const ShipsView: FC = () => {
    const { auth } = useAuth()
    const { getAvailableShips } = useSpaceTraderService()
    const [ queryAvailableShips, setQueryAvailableShips ] = useState(false)
    const [ availableShips, setAvailableShips ] = useState<STShipAvailable[]>([])

    useEffect(() => {
        if (!queryAvailableShips) {
            getAvailableShips("MK-I").then(ships => {
                setAvailableShips(ships)
                setQueryAvailableShips(true)
            })
        }
    })

    const renderUserShips = () => {
        return !auth.user.ships.length ? (
            <InfoMessage compact message="You have no ships" />
        ): auth.user.ships.map(ship => {
            return <ShipOwned ship={ ship } key={ ship.id } />
        })
    }

    const renderAvailableShips = () => {
        if (!queryAvailableShips) {
            return <p>Getting Ships...</p>
        }

        return !availableShips.length ? (
            <InfoMessage compact message="No ships available" />
        ) : availableShips.map(ship => {
            return <ShipAvailable ship={ ship } key={ ship.type } />
        })
    }

    return (
        <section>
            <h2>Your Ships</h2>
            { renderUserShips() }

            <h2>Available Ships</h2>
            { renderAvailableShips() }
        </section>
    )
}

export default ShipsView
