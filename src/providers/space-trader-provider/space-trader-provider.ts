import RestfulProvider, { RestfulProviderProps } from "../restful-provider/restful-provider";
import { RestfulGetEndpoint, RestfulPostEndpoint } from "../restful-provider/restful-endpoint";
import {
    UserAccountRequest,
    AccessTokenResponse,
    BaseTokenRequest,
    AvailableLoanResponse,
    UserAccountResponse,
    ClaimLoanRequest,
    ViewShipsRequest,
    ViewShipsResponse,
    PurchaseShipRequest,
    PurchaseGoodsRequest,
    PurchaseGoodsResponse, BaseUserRequest
} from './space-trader-provider-interfaces'


export interface ISpaceTraderEndpoints {
    gameStatus: RestfulGetEndpoint<{}, { status: string }>
    accessToken: RestfulPostEndpoint<BaseUserRequest, AccessTokenResponse>
    userAccount: RestfulGetEndpoint<UserAccountRequest, UserAccountResponse>
    loansAvailable: RestfulGetEndpoint<BaseTokenRequest, AvailableLoanResponse>
    claimLoan: RestfulPostEndpoint<ClaimLoanRequest, UserAccountResponse>
    shipsAvailable: RestfulGetEndpoint<ViewShipsRequest, ViewShipsResponse>,
    purchaseShip: RestfulPostEndpoint<PurchaseShipRequest, UserAccountResponse>
    purchaseGoods: RestfulPostEndpoint<PurchaseGoodsRequest, PurchaseGoodsResponse>
}

export interface SpaceTraderProviderProps extends RestfulProviderProps {
    //
}

class SpaceTraderProvider extends RestfulProvider {
    endpoints: ISpaceTraderEndpoints

    constructor(props: SpaceTraderProviderProps) {
        super(props);

        this.endpoints = {
            gameStatus: new RestfulGetEndpoint({
                endpoint: "/game/status",
                provider: this
            }),
            accessToken: new RestfulPostEndpoint({
                endpoint: "/users/$username/token",
                provider: this
            }),
            userAccount: new RestfulGetEndpoint({
                endpoint: "/users/$username?token=$token",
                provider: this
            }),
            loansAvailable: new RestfulGetEndpoint({
                endpoint: "/game/loans?token=$token",
                provider: this
            }),
            claimLoan: new RestfulPostEndpoint({
                endpoint: "/users/$username/loans?token=$token&type=$type",
                provider: this
            }),
            shipsAvailable: new RestfulGetEndpoint({
                endpoint: "/game/ships?token=$token&class=$class",
                provider: this
            }),
            purchaseShip: new RestfulPostEndpoint({
                endpoint: "/users/$username/ships?token=$token&location=$location&type=$type",
                provider: this
            }),
            purchaseGoods: new RestfulPostEndpoint({
                endpoint: "users/$username/purchase-orders?token=$token&shipId=$shipId&good=$good&quantity=$quantity",
                provider: this
            }),
        }
    }
}

export const getSpaceTraderProvider = () => {
    return new SpaceTraderProvider({
        source: 'https://api.spacetraders.io'
    })
}
