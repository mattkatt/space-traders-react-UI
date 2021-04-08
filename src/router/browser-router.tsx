import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./router-switch";
import Header from "../components/ui/header";
import Nav from "../components/nav";
import Container from "../components/ui/container";


interface routeConfig {
    name: string
    path: string,
    Render: any,
    private: boolean
}

interface routerConfig {
    routes: routeConfig[]
}

const Router: FC<routerConfig> = ({ routes }) => {
    return (
        <BrowserRouter>
            <Header title="Space Trader">
                <Nav routes={ routes } />
            </Header>

            <Container>
                <RouteSwitch routes={ routes } />
            </Container>
        </BrowserRouter>
    )
}

export default Router
export { routerConfig, routeConfig }
