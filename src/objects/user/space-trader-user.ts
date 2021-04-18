import { STShipOwned } from "../ship";
import { STLoanClaimed } from "../loan";


export interface STUser {
    credits: number
    loans: STLoanClaimed[]
    ships: { [key: string]: STShipOwned }
    username: string
}
