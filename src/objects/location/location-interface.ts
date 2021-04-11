import { STGood } from "../goods";


export interface STLocation {
    name: string
    symbol: string
    type: string
    x: number
    y: number
    marketplace: STGood[]
}
