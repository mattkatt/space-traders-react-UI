export interface routeConfig {
    name: string
    path: string,
    Render: any,
    private: boolean
}

export interface routerConfig {
    routes: routeConfig[]
}

export interface IRoute {
    path: string
    exact?: boolean
}

export interface IRouteNav extends routerConfig {
    activeClass?: string
}
