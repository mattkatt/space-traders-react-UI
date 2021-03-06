import { STCargo } from "../goods";


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
    id: string
    cargo: STCargo[]
    spaceAvailable: number
    x: number
    y: number
    location: string
}
