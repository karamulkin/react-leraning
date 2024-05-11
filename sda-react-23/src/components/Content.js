import React from "react"

export const Content = ({ children }) => {
    return (
        <main
        style={{
            padding: 12,
        }}
        >
        {children}
        </main>
    );
};