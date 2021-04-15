import { FC, useEffect } from "react";
import { useSpaceTraderService } from "../../services";
import { STGoods } from "../../objects/goods";
import { CreditsHelpers } from "../../helpers";
import Button from "../ui/buttons";
import styles from "./market.module.css"

interface IMarket {
    location: string
}

const Market: FC<IMarket> = ({ location }) => {
    let { viewMarket, /*purchaseGoods*/ } = useSpaceTraderService()
    let market: STGoods[]

    useEffect(() => {
        viewMarket(location).then(result => {
            market = result
        })
    }, [location])

    if (!market.length) {
        return (
            <p>Loading Market...</p>
        )
    }

    const buyGood = (good: STGoods, units: number) => {
        console.log(`Buying ${good.symbol}`)
    }

    const marketGoods = market.map(good => {
        return (
            <div className={ styles.good }>
                <span className={ styles.item }>{good.symbol} ({ good.volumePerUnit }m3/unit)</span>
                <span className={ styles.item }>{good.quantityAvailable}</span>
                <span className={ styles.item }>{CreditsHelpers.display(good.pricePerUnit)}</span>
                <Button onClick={ () => buyGood(good, 10) } content="Buy 10" compact />
            </div>
        )
    })

    return (
        <div className={ styles.market }>
            { marketGoods }
        </div>
    )
}

export default Market
