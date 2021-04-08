interface STShip {
    class: string
    manufacturer: string
    maxCargo: number
    plating: number
    speed: number
    type: string
    weapons: number
}

interface STShipPurchaseLocation {
    location: string
    price: number
}

export interface STShipAvailable extends STShip {
    purchaseLocations: STShipPurchaseLocation[]
}

export interface STShipOwned extends STShip {
    cargo: any[],
    id: string,
    location: string,
    spaceAvailable: number,
    x: number,
    y: number
}
