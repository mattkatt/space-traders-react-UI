import { getLocalStorageProvider } from "../providers/local-storage-provider/local-storage-provider";

interface ILocalStorageService {
    storage: () => Storage
    get: (item: string) => any
    set: (item: string, value: any) => void
    remove: (item: string) => void
    clear: () => void
}

export const useLocalStorageService = (): ILocalStorageService => {
    const provider = getLocalStorageProvider()

    const storage = (): Storage => {
        return provider.getStorage()
    }

    const get = (item: string): any => {
        return provider.getItem(item)
    }

    const set = (item: string, value: any) => {
        provider.setItem(item, value)
    }

    const remove = (item: string) => {
        provider.removeItem(item)
    }

    const clear = () => {
        provider.clearStorage()
    }

    return { storage, get, set, remove, clear }
}
