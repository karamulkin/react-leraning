import React from "react";

import { Page } from  "./Page";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

import { ThemeProvider } from "../theme";

export const App = () => {
    return (
        <ThemeProvider>
            <Page>
                <Header />
                <MainContent />
            </Page>
        </ThemeProvider>
    );
};