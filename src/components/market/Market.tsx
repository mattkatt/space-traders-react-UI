import { FC, useEffect, useState } from "react";
import { useSpaceTraderService } from "../../services";
import { STGoods } from "../../objects/goods";
import { CreditsHelpers, StringHelpers, VolumeHelpers } from "../../helpers";
import Button from "../ui/buttons";
import styles from "./market.module.css"
import Modal from "../modal";

interface IMarket {
    location: string
    shipId?: string
}

interface IMarketState {
    market: STGoods[]
    purchasing: boolean
    success: boolean
}

const Market: FC<IMarket> = ({ location, shipId }) => {
    const { viewMarket, purchaseGoods } = useSpaceTraderService()
    const [state, setState] = useState<IMarketState>({
        market: [],
        purchasing: false,
        success: false,
    })

    useEffect(() => {
        viewMarket(location).then(result => {
            setState({...state, market: result})
        })
    }, [])

    if (!state.market.length) {
        return (
            <p>Loading Market...</p>
        )
    }

    const buyGood = (good: STGoods, shipId: string, units: number) => {
        setState({...state, purchasing: true})

        purchaseGoods(good, shipId, units).then(result => {
            setState({...state, success: result})
        }).catch(error => {
            console.error(error)
        }).finally(() => {
            setState({...state, purchasing: false})
        })
    }

    return (
        <div className={styles.market}>
            { state.market.map(good => (
                <div className={styles.good} key={good.symbol}>
                    <span className={styles.item}>{StringHelpers.toReadable(good.symbol)} ({VolumeHelpers.display(good.volumePerUnit)}/unit)</span>
                    <span className={styles.item}>{good.quantityAvailable}</span>
                    <span className={styles.item}>{CreditsHelpers.display(good.pricePerUnit)}</span>

                    {shipId ? (
                        <Button
                            onClick={() => buyGood(good, shipId ?? '', 10)}
                            content="Buy 10"
                            compact
                        />
                    ) : null}
                </div>
            ))}

            <Modal display={ state.success } onDismiss={() => setState({...state, success: false})}>
                <p>Purchase successful!</p>
            </Modal>
        </div>
    )
}

export default Market
