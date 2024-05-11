import React from "react"
import { Link, useRouteError } from "react-router-dom";

export const PageError = () => {
    const error = useRouteError();
    const message = error.status === 404 ? "404 Page does not exist!" : "Error occured!";
    
    return (
        <div style={{ padding: 20 }}>
            <div style={{ paddingBottom: 20 }}>{message}</div>
            <div>
                <Link to="/">Go to Home Page</Link>
            </div>
        </div>
    );
};