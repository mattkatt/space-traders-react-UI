import React, { FC } from "react"
import styles from "./user.module.css"
import { useAuth } from "../../context/auth-context";
import { CreditsHelpers } from "../../helpers";

const UserNavDisplay: FC = () => {
    const { auth } = useAuth()

    return (
        <div className={ styles.userNavDisplay }>
            { auth.user.username } : { CreditsHelpers.display(auth.user.credits) }
        </div>
    )
}

export default UserNavDisplay
