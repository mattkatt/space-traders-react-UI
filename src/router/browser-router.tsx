import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./router-switch";
import Header from "../components/ui/header";
import Nav from "../components/nav";
import Container from "../components/ui/container";
import { routerConfig } from "./router-interfaces";


export const Router: FC<routerConfig> = ({ routes }) => {
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
