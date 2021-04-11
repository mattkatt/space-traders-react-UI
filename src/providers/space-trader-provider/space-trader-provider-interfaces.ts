import { TRestfulData } from "../restful-provider/restful-provider";
import { STUser } from "../../objects/user";
import { STLoanAvailable } from "../../objects/loan";
import { STShipAvailable, STShipOwned } from "../../objects/ship";


export interface BaseUserRequest extends TRestfulData {
    username: string
}

export interface BaseTokenRequest extends TRestfulData {
    token: string
}

export interface UserAccountRequest extends BaseUserRequest, BaseTokenRequest {
    //
}

export interface AccessTokenResponse {
    token: string
    user: STUser
}

export interface UserAccountResponse {
    user: STUser
}

export interface AvailableLoanResponse {
    loans: STLoanAvailable[]
}

export interface ClaimLoanRequest extends UserAccountRequest {
    type: string
}

export interface ViewShipsRequest extends BaseTokenRequest {
    class: string
}

export interface ViewShipsResponse {
    ships: STShipAvailable[]
}

export interface PurchaseShipRequest extends UserAccountRequest {
    location: string
    type: string
}

export interface PurchaseGoodsRequest extends UserAccountRequest {
    shipId: string
    good: string
    quantity: number
}

export interface PurchaseGoodsResponse {
    credits: number
    order: any[]
    ship: STShipOwned
}
