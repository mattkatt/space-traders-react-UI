import { createContext, useContext, useMemo, useState } from "react";
import { STUser } from "../objects/user";
import { useSettings } from "./settings-context";
import { useLocalStorageService } from "../services";
import { STShipOwned } from "../objects/ship";


interface IAuthState {
    user: STUser
    token: string
    isAuth: boolean
}

interface IAuth {
    auth: IAuthState
    checkLocalAuth: () => boolean
    login: (user: STUser, token: string) => void
    logout: () => void
    updateUser: (user: STUser) => void
    updateUserCredits: (credits: number) => void
    updateUserShip: (ship: STShipOwned) => void
}

const emptyUser: STUser = {
    username: "",
    credits: 0,
    loans: [],
    ships: {}
}

const defaultAuthState: IAuthState =  {
    user: emptyUser,
    token: '',
    isAuth: false
}

const AuthContext = createContext(defaultAuthState)

function useAuth(): IAuth {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    // @ts-ignore
    const [auth, setAuth] = context
    const { settings } = useSettings()
    const localStorage = useLocalStorageService()

    const setLoggedInUser = (user: STUser, token: string) => {
        setAuth({
            user: user,
            token: token,
            isAuth: true
        })
    }

    const checkLocalAuth = (): boolean => {
        const storageAuth = localStorage.get('auth')

        if (!storageAuth) {
            return false
        }

        const now = new Date().getTime()
        const checkDate = Date.parse(storageAuth.added)
        const timeDiff = Math.abs(now - checkDate)

        if (timeDiff > settings.authSettings.timeout) {
            localStorage.remove('auth')
            return false
        }

        setLoggedInUser(storageAuth.user, storageAuth.token)
        return true
    }

    const login = (user: STUser, token: string) => {
        setLoggedInUser(user, token)

        localStorage.set('auth', {
            user: user,
            token: token,
            added: new Date()
        })
    }

    const logout = () => {
        setAuth({
            user: emptyUser,
            token: '',
            isAuth: false
        })

        localStorage.remove('auth')
    }

    const updateUser = (user: STUser) => {
        let currentAuth = { ...auth } as IAuthState
        currentAuth.user = user
        setAuth(currentAuth)
    }

    const updateUserCredits = (credits: number) => {
        let currentAuth = { ...auth } as IAuthState
        currentAuth.user.credits = credits
        setAuth(currentAuth)
    }

    const updateUserShip = (ship: STShipOwned) => {
        if (!auth.user.ships[ship.id]) {
            throw new Error(`Ship ${ ship.id } not found`)
        }

        let currentAuth = { ...auth } as IAuthState
        currentAuth.user.ships[ship.id] = ship
        setAuth(currentAuth)
    }

    return {
        auth,
        checkLocalAuth,
        login,
        logout,
        updateUser,
        updateUserCredits,
        updateUserShip,
    }
}

function AuthProvider(props: any) {
    const [auth, setAuth] = useState(defaultAuthState)
    const value = useMemo(() => [auth, setAuth], [auth])

    return <AuthContext.Provider value={value} {...props} />
}

export { AuthProvider, useAuth }
