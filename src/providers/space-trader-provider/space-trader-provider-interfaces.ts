import { TRestfulData } from "../restful-provider/restful-provider";
import { STUser } from "../../objects/user";
import { STLoanAvailable } from "../../objects/loan";


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
    user: STUser
}

export interface UserAccountRequest extends BaseUserRequest, BaseTokenRequest {
    //
}

export interface UserAccountResponse {
    user: STUser
}

export interface AvailableLoanResponse {
    loans: STLoanAvailable[]
}
