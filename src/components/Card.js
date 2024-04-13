import React from "react";

import { useTheme } from "../hooks/useTheme";

export const Card = ({ title }) => {
    const theme = useTheme();

    return (
        <section
        style={{
            padding: 12,
        }}
        >
        <div
            style={{
                padding: 12,
                border: "1px solid",
                borderColor: theme.values.colors.accent,
                borderRadius: 6,
            }}
            >
                <h2 style={{ margin: 0, marginBottom: 12 }}>{title}</h2>
        </div>
    </section>
    );
};