import React from "react";

import { Content } from "./Content";
import { PaginationButtons } from "./PaginationButtons";
import { Cards } from "./Cards";
import { useTodos } from "../hooks/useTodos";

export const ContentMain = () => {
  const { setPage, finalPage, page, todos } = useTodos();

  return (
    <Content>
      <Cards data={todos} />
      <PaginationButtons setPage={setPage} finalPage={finalPage} page={page} />
    </Content>
  );
};