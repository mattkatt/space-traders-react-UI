import { getSpaceTraderProvider } from "../providers/space-trader-provider/space-trader-provider";
import { SpaceTraderUser } from "../objects/space-trader-user";
import { SpaceTraderLoan } from "../objects/space-trader-loan";

interface ISpaceTraderService {
    checkGameStatus: () => Promise<string>
    generateUserToken: (username: string) => Promise<string>
    getUserDetails: (username: string, token: string) => Promise<SpaceTraderUser>
    getAvailableLoans: (token: string) => Promise<SpaceTraderLoan[]>
}

export const spaceTraderService = (): ISpaceTraderService => {
    const provider = getSpaceTraderProvider()

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

    const getUserDetails = async (username: string, token: string): Promise<SpaceTraderUser> => {
        const response =  await provider.endpoints.userAccount.get({
            username: username,
            token: token
        })

        return response.user
    }

    const getAvailableLoans = async (token: string): Promise<SpaceTraderLoan[]> => {
        const response = await provider.endpoints.loans.get({
            token: token
        })

        return response.loans
    }

    return {
        checkGameStatus,
        generateUserToken,
        getUserDetails,
        getAvailableLoans
    }
}
