import RestfulProvider, { RestfulProviderProps } from "../restful-provider/restful-provider";
import { RestfulGetEndpoint, RestfulPostEndpoint } from "../restful-provider/restful-endpoint";
import {
    AccessTokenRequest,
    UserAccountRequest,
    AccessTokenResponse, BaseTokenRequest, AvailableLoanResponse, UserAccountResponse
} from './space-trader-provider-interfaces'

export interface ISpaceTraderEndpoints {
    gameStatus: RestfulGetEndpoint<{}, { status: string }>
    accessToken: RestfulPostEndpoint<AccessTokenRequest, AccessTokenResponse>
    userAccount: RestfulGetEndpoint<UserAccountRequest, UserAccountResponse>
    loans: RestfulGetEndpoint<BaseTokenRequest, AvailableLoanResponse>
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
            loans: new RestfulGetEndpoint({
                endpoint: "/game/loans?token=$token",
                provider: this
            })
        }
    }
}

export const getSpaceTraderProvider = () => {
    return new SpaceTraderProvider({
        source: 'https://api.spacetraders.io'
    })
}
