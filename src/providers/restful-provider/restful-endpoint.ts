import { TRestfulData, IRestfulProvider } from "./restful-provider";


interface RestfulEndpointProps {
    endpoint: string,
    provider: IRestfulProvider
}

class RestfulEndpoint {
    endpoint: string
    protected provider: IRestfulProvider

    constructor(props: RestfulEndpointProps) {
        this.provider = props.provider
        this.endpoint = this.provider.source + props.endpoint
    }
}

export class RestfulGetEndpoint<TData extends TRestfulData, TReturn> extends RestfulEndpoint {
    async get(data?: TData): Promise<TReturn> {
        return this.provider.baseGetMethod<TReturn>(this.endpoint, data)
    }
}

export class RestfulPostEndpoint<TData extends TRestfulData, TReturn> extends RestfulEndpoint {
    async post(data: TData): Promise<TReturn> {
        return this.provider.basePostMethod(this.endpoint, data)
    }
}

export class RestfulPutEndpoint<TData extends TRestfulData, TReturn> extends RestfulEndpoint {
    async put(data: TData): Promise<TReturn> {
        return this.provider.basePutMethod(this.endpoint, data)
    }
}
