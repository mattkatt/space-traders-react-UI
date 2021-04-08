import { createContext, useContext, useMemo, useState } from "react";
import user from "../settings/user.json";
import auth from "../settings/auth.json";


interface ISettingsState {
    [key: string]: any

    defaultUser: { username: string, token: string }
    authSettings: { timeout: number }
}

interface ISettings {
    settings: ISettingsState,
    changeSetting: (att: string, value: any) => void
}

const defaultSettingsState: ISettingsState = {
    defaultUser: user,
    authSettings: auth
}

const SettingsContext = createContext(defaultSettingsState)

function useSettings(): ISettings {
    const context = useContext(SettingsContext)

    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider')
    }

    // @ts-ignore
    const [settings, setSettings] = context

    const changeSetting = (att: string, value: any) => {
        const newState = { ...settings }

        if (!newState.hasOwnProperty(att)) {
            throw new Error(`Property ${att} does not exist in settings`)
        }

        newState[att] = value
        setSettings(newState)
    }

    return {
        settings,
        changeSetting
    }
}

function SettingsProvider(props: any) {
    const [settings, setSettings] = useState(defaultSettingsState)
    const value = useMemo(() => [settings, setSettings], [settings])

    return <SettingsContext.Provider value={value} {...props} />
}

export { SettingsProvider, useSettings }
