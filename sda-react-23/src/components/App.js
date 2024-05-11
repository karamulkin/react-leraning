import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "../theme";

import { ContentMain } from "./ContentMain";
import { PageRoot } from "./PageRoot";
import { ContentContacts } from "./ContentContacts";
import { ContentAbout } from "./ContentAbout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageRoot />,
        children: [
            {
                path: "/",
                element: <ContentMain />,
            },
            {
                path: "/about",
                element: <ContentAbout />,
            },
            {
                path: "/contact/:type",
                element: <ContentContacts />,
            },
        ],
    },
]);

export const App = () => {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};