import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { useTheme } from "../hooks/useTheme";

export const Link = ({ href, children }) => {
    const theme = useTheme();

    return (
        <ReactRouterLink
        style={{
            textDecoration: "none",
            color: theme.values.colors.text,
        }}
        to={href}
        >
            {children}
        </ReactRouterLink>
    );
};