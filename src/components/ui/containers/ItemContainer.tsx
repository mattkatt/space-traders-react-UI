import { FC } from "react";
import styles from './container.module.css'

interface IItemContainer {
    //
}

const ItemContainer: FC<IItemContainer> = ({
    children
}) => {
    return (
        <div className={ styles.itemContainer }>
            { children }
        </div>
    )
}

export default ItemContainer
