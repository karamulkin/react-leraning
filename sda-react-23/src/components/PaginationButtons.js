import React from "react";

import { Button } from "./Button";

export const PaginationButtons = ({ setPage, page, finalPage = 20 }) => {
    return (
        <div
        style={{
            padding: 12,
            display: "flex",
            gap: 12,
        }}
        >
            {page > 1 && (
                <Button onClick={() => setPage(page - 1)}>Prev</Button>
            )}
            {page < finalPage && (
                <Button onClick={() => setPage(page => page + 1)}>Next</Button>
            )}
        </div>
    );
};