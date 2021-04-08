import { SpaceTraderLoan } from "./space-trader-loan";
import { SpaceTraderShip } from "./space-trader-ship";

export interface SpaceTraderUser {
    credits: number,
    loans: Array<SpaceTraderLoan>,
    ships: Array<SpaceTraderShip>,
    username: string
}
