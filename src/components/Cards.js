import React from "react";

import { Card } from "./Card";

export const Cards = ({ data }) => {
    return data.map(item => {
        return <Card key={item.id} title={item.title} />;
    });
};