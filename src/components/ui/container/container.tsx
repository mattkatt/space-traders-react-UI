import { FC } from "react";
import styles from './container.module.css'

interface IContainer {
    //
}

const Container: FC<IContainer> = ({
    children
}) => {
    return (
        <main className={ styles.container }>
            { children }
        </main>
    )
}

export default Container
