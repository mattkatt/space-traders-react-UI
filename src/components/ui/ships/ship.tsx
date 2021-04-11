import React, { FC } from "react";
import styles from "./ship.module.css";

interface IShip {
    status: "Available" | "Owned"
}

const Ship: FC<IShip> = ({ status, children }) => {
    const classNames = () => {
        let name = styles.ship

        switch (status) {
            case "Available":
                return `${ name } ${ styles.shipAvailable }`
            case "Owned":
                return `${ name } ${ styles.shipOwned }`
        }
    }

    return (
        <figure className={ classNames() }>
            { children }
        </figure>
    )
}

export default Ship
