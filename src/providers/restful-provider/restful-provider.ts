import axios, { AxiosRequestConfig } from "axios";


export interface TRestfulData {
    [key:string]: string | number
}

export interface IRestfulProvider {
    source: string
    baseGetMethod: <TReturn>(url: string, data?: TRestfulData) => Promise<TReturn>
    basePostMethod: <TReturn>(url: string, data: TRestfulData) => Promise<TReturn>
}

export interface RestfulProviderProps {
    source: string
}

export type RestfulMethods = "GET" | "POST"

export default class RestfulProvider implements IRestfulProvider {
    source: string

    constructor(props: RestfulProviderProps) {
        this.source = props.source
    }

    async makeCall(url: string, method: RestfulMethods, data?: TRestfulData ): Promise<any> {
        let callUrl = url

        if (data && url.includes('$')) {
            callUrl = url.replace(/\$([a-zA-Z]*)/g, (word): string => {
                const attribute = word.substring(1)
                const value = data[attribute]

                if (!value || value === '') {
                    throw new Error('Incorrect/Null value passed to endpoint')
                }

                return data[attribute].toString()
            })
        }

        let axiosConfig: AxiosRequestConfig = {
            url: callUrl,
            method: method
        }

        if (data) {
            axiosConfig['data'] = data
        }

        try {
            const axiosCall = await axios(axiosConfig)

            return axiosCall.data
        } catch (error) {
            if (error.response) {
                throw error.response.data.error
            } else {
                console.error(error)

                throw Error("Unknown error")
            }
        }
    }

    async baseGetMethod<TReturn>(url: string, data?: TRestfulData): Promise<TReturn> {
        return await this.makeCall(url, "GET", data)
    }

    async basePostMethod<TReturn>(url: string, data: TRestfulData): Promise<TReturn> {
        return await this.makeCall(url, "POST", data)
    }
}
