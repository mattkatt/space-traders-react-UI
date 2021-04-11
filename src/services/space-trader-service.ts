import { getSpaceTraderProvider } from "../providers/space-trader-provider/space-trader-provider";
import { STUser } from "../objects/user";
import { STLoanAvailable } from "../objects/loan";

interface ISpaceTraderService {
    checkGameStatus: () => Promise<string>
    generateUserToken: (username: string) => Promise<string>
    getUserDetails: (username: string, token: string) => Promise<STUser>
    getAvailableLoans: (token: string) => Promise<STLoanAvailable[]>
    //claimLoan: () => Promise<any>
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

    const getUserDetails = async (username: string, token: string): Promise<STUser> => {
        const response =  await provider.endpoints.userAccount.get({
            username: username,
            token: token
        })

        return response.user
    }

    const getAvailableLoans = async (token: string): Promise<STLoanAvailable[]> => {
        const response = await provider.endpoints.loansAvailable.get({
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
