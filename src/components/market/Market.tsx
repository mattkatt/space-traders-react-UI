import { FC, useEffect, useState } from "react";
import { useSpaceTraderService } from "../../services";
import { STGoods } from "../../objects/goods";
import { CreditsHelpers } from "../../helpers";
import Button from "../ui/buttons";
import styles from "./market.module.css"

interface IMarket {
    location: string
    shipId?: string
}

const Market: FC<IMarket> = ({ location, shipId }) => {
    const { viewMarket, /*purchaseGoods*/ } = useSpaceTraderService()
    const [market, setMarket] = useState<STGoods[]>([])

    useEffect(() => {
        viewMarket(location).then(result => {
            console.log('market', result)
            setMarket(result)
        })
    }, [])

    if (!market.length) {
        return (
            <p>Loading Market...</p>
        )
    }

    const buyGood = (good: STGoods, shipId: string, units: number) => {
        console.log(`Buying ${units} ${good.symbol} for ship ${shipId}`)
    }

    const marketGoods = market.map(good => {
        return (
            <div className={styles.good} key={good.symbol}>
                <span className={styles.item}>{good.symbol} ({good.volumePerUnit}m3/unit)</span>
                <span className={styles.item}>{good.quantityAvailable}</span>
                <span className={styles.item}>{CreditsHelpers.display(good.pricePerUnit)}</span>
                {shipId ? (
                    <Button onClick={() => buyGood(good, shipId ?? '', 10)} content="Buy 10" compact />
                ) : null}

            </div>
        )
    })

    return (
        <div className={styles.market}>
            <b>Ship ID: { shipId }</b>
            {marketGoods}
        </div>
    )
}

export default Market
