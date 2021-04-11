import { createContext, useContext, useMemo, useState } from "react";
import { STUser } from "../objects/user";
import { useSettings } from "./settings-context";
import { useLocalStorageService } from "../services";


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
}

const emptyUser: STUser = {
    username: "",
    credits: 0,
    loans: [],
    ships: []
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

    return {
        auth,
        checkLocalAuth,
        login,
        logout,
    }
}

function AuthProvider(props: any) {
    const [auth, setAuth] = useState(defaultAuthState)
    const value = useMemo(() => [auth, setAuth], [auth])

    return <AuthContext.Provider value={value} {...props} />
}

export { AuthProvider, useAuth }
