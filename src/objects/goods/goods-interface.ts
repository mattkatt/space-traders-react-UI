interface Goods {
    pricePerUnit: number
}

interface Owned {
    good: string
    quantity: number
}

export interface STGoods extends Goods {
    symbol: string
    volumePerUnit: number
    quantityAvailable: number
}

export interface STOrder extends Goods, Owned {
    total: number
}

export interface STCargo extends Owned {
    totalVolume: number
}
