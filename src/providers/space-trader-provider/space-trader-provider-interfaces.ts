import { TRestfulData } from "../restful-provider/restful-provider";
import { SpaceTraderUser } from "../../objects/space-trader-user";
import { SpaceTraderLoan } from "../../objects/space-trader-loan";

interface BaseUserRequest extends TRestfulData {
    username: string
}

export interface BaseTokenRequest extends TRestfulData {
    token: string
}

export interface AccessTokenRequest extends BaseUserRequest {
    //
}

export interface AccessTokenResponse {
    token: string
    user: SpaceTraderUser
}

export interface UserAccountRequest extends BaseUserRequest, BaseTokenRequest {
    //
}

export interface UserAccountResponse {
    user: SpaceTraderUser
}

export interface AvailableLoanResponse {
    loans: SpaceTraderLoan[]
}
