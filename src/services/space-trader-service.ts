import { getSpaceTraderProvider } from "../providers/space-trader-provider/space-trader-provider";
import { STUser } from "../objects/user";
import { STLoanAvailable } from "../objects/loan";
import { STShipAvailable } from "../objects/ship";
import { STGoods } from "../objects/goods";
import { PurchaseGoodsResponse } from "../providers/space-trader-provider/space-trader-provider-interfaces";
import { useAuth } from "../context/auth-context";

interface ISpaceTraderService {
    checkGameStatus: () => Promise<string>
    generateUserToken: (username: string) => Promise<string>
    getUserDetails: (username: string, token: string) => Promise<STUser>
    getAvailableLoans: () => Promise<STLoanAvailable[]>
    claimLoan: (type: string) => Promise<STUser>
    getAvailableShips: (shipClass: string) => Promise<STShipAvailable[]>
    purchaseShip: (location: string, type: string) => Promise<STUser>
    viewMarket: (location: string) => Promise<STGoods[]>
    purchaseGoods: (good: string, shipId: string, quantity: number) => Promise<any>
}

export const useSpaceTraderService = (): ISpaceTraderService => {
    const provider = getSpaceTraderProvider()
    const { auth } = useAuth()

    const checkAuth = () => {
        if (!auth.isAuth) {
            throw Error("No Auth User")
        }
    }

    const checkGameStatus = async (): Promise<string> => {
        const response = await provider.endpoints.gameStatus.get()

        return response.status
    }

    const generateUserToken = async (username: string): Promise<string> => {
        const response = await provider.endpoints.accessToken.post({
            username: username
        })

        return response.token
    }

    const getUserDetails = async (username: string, token: string): Promise<STUser> => {
        const response =  await provider.endpoints.userAccount.get({
            username: username,
            token: token
        })

        return response.user
    }

    const getAvailableLoans = async (): Promise<STLoanAvailable[]> => {
        checkAuth()

        const response = await provider.endpoints.loansAvailable.get({
            token: auth.token
        })

        return response.loans
    }

    const claimLoan = async (type: string): Promise<STUser> => {
        checkAuth()

        const response = await provider.endpoints.claimLoan.post({
            username: auth.user.username,
            token: auth.token,
            type: type,
        })

        return response.user
    }

    const getAvailableShips = async (shipClass: string): Promise<STShipAvailable[]> => {
        checkAuth()

        const response = await provider.endpoints.shipsAvailable.get({
            token: auth.token,
            class: shipClass,
        })

        return response.ships
    }

    const purchaseShip = async (location: string, type: string): Promise<STUser> => {
        checkAuth()

        const response = await provider.endpoints.purchaseShip.post({
            username: auth.user.username,
            token: auth.token,
            location: location,
            type: type,
        })

        return response.user
    }

    const viewMarket = async (location: string): Promise<STGoods[]> => {
        checkAuth()

        const response = await provider.endpoints.viewMarket.get({
            token: auth.token,
            location: location,
        })

        return response.location.marketplace
    }

    const purchaseGoods = async (good: string, shipId: string, quantity: number): Promise<PurchaseGoodsResponse> => {
        checkAuth()

        return await provider.endpoints.purchaseGoods.post({
            username: auth.user.username,
            token: auth.token,
            shipId: shipId,
            good: good,
            quantity: quantity,
        })
    }

    return {
        checkGameStatus,
        generateUserToken,
        getUserDetails,
        getAvailableLoans,
        claimLoan,
        getAvailableShips,
        purchaseShip,
        viewMarket,
        purchaseGoods
    }
}
