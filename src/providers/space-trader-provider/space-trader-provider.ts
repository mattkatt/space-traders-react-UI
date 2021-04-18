import RestfulProvider, { RestfulProviderProps } from "../restful-provider/restful-provider";
import { RestfulGetEndpoint, RestfulPostEndpoint, RestfulPutEndpoint } from "../restful-provider/restful-endpoint";
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
    PurchaseGoodsResponse,
    BaseUserRequest,
    ViewMarketRequest,
    ViewMarketResponse,
    RepayLoanRequest,
    ViewSystemsResponse,
    ViewSystemLocationsRequest,
    ViewSystemLocationTypeRequest,
    ViewSystemLocationsResponse
} from './space-trader-provider-interfaces'


export interface ISpaceTraderEndpoints {
    gameStatus: RestfulGetEndpoint<{}, { status: string }>
    accessToken: RestfulPostEndpoint<BaseUserRequest, AccessTokenResponse>
    userAccount: RestfulGetEndpoint<UserAccountRequest, UserAccountResponse>
    loansAvailable: RestfulGetEndpoint<BaseTokenRequest, AvailableLoanResponse>
    claimLoan: RestfulPostEndpoint<ClaimLoanRequest, UserAccountResponse>
    repayLoan: RestfulPutEndpoint<RepayLoanRequest, UserAccountResponse>
    shipsAvailable: RestfulGetEndpoint<ViewShipsRequest, ViewShipsResponse>
    purchaseShip: RestfulPostEndpoint<PurchaseShipRequest, UserAccountResponse>
    viewMarket: RestfulGetEndpoint<ViewMarketRequest, ViewMarketResponse>
    purchaseGoods: RestfulPostEndpoint<PurchaseGoodsRequest, PurchaseGoodsResponse>
    viewSystems: RestfulGetEndpoint<BaseTokenRequest, ViewSystemsResponse>
    viewSystemLocations: RestfulGetEndpoint<ViewSystemLocationsRequest, ViewSystemLocationsResponse>
    viewSystemLocationType: RestfulGetEndpoint<ViewSystemLocationTypeRequest, ViewSystemLocationsResponse>
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
            repayLoan: new RestfulPutEndpoint({
                endpoint: "/users/$username/loans/$loanId?token=$token",
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
            viewMarket: new RestfulGetEndpoint({
                endpoint: "/game/locations/$location/marketplace?token=$token",
                provider: this
            }),
            purchaseGoods: new RestfulPostEndpoint({
                endpoint: "/users/$username/purchase-orders?token=$token&shipId=$shipId&good=$good&quantity=$quantity",
                provider: this
            }),
            viewSystems: new RestfulGetEndpoint({
                endpoint: '/game/systems?token=$token',
                provider: this,
            }),
            viewSystemLocations: new RestfulGetEndpoint({
                endpoint: '/game/systems/$system/locations?token=$token',
                provider: this,
            }),
            viewSystemLocationType: new RestfulGetEndpoint({
                endpoint: "/game/systems/$system/locations?token=$token&type=$type",
                provider: this,
            }),
        }
    }
}

export const getSpaceTraderProvider = () => {
    return new SpaceTraderProvider({
        source: 'https://api.spacetraders.io'
    })
}
