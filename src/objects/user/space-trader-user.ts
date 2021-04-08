import { STShipOwned } from "../ship";
import { STLoanClaimed } from "../loan";


export interface STUser {
    credits: number,
    loans: STLoanClaimed[],
    ships: STShipOwned[],
    username: string
}
