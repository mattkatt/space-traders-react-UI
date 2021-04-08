interface ILocalStorageProvider {
    getStorage: () => Storage
    setItem: (item: string, value: any) => void
    getItem: (item: string) => any
    removeItem: (item: string) => void
    clearStorage: () => void
}

class LocalStorageProvider implements ILocalStorageProvider {
    storage: Storage

    constructor() {
        this.storage = window.localStorage
    }

    private convertValueToStorageValue(value: any): string {
        return JSON.stringify(value)
    }

    private convertStorageValueToValue(storageObject: string): any {
        return JSON.parse(storageObject)
    }

    getStorage(): Storage {
        return this.storage
    }

    setItem(item: string, value: any): void {
        const storageValue = this.convertValueToStorageValue(value)
        this.storage.setItem(item, storageValue)
    }

    getItem(item: string): any {
        const itemFromStorage = this.storage.getItem(item)
        if (!itemFromStorage) {
            return false
        }

        return this.convertStorageValueToValue(itemFromStorage)
    }

    removeItem(item: string): void {
        if (this.storage.getItem(item) === undefined) {
            let error = new Error(`${item} does not exist in storage`)
            console.error(error)
            throw error
        }

        this.storage.removeItem(item)
    }

    clearStorage(): boolean {
        try {
            this.storage.clear()
        } catch (error) {
            console.error(error)
            return false
        }

        return true
    }
}

export const getLocalStorageProvider = () => {
    return new LocalStorageProvider()
}
