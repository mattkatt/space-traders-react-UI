import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./router-switch";
import Header from "../components/ui/header";
import Nav from "../components/nav";
import Container from "../components/ui/container";

export interface routeConfig {
    name: string
    path: string,
    Render: any,
    private: boolean
}

export interface routerConfig {
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
