import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { Content } from "./Content";

export const ContentContacts = () => {
  const { type } = useParams();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const name = searchParams.get("name");

  return (
    <Content>
      <div>contacts {type}</div>

      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id || "-"}</td>
            <td>{name || "-"}</td>
          </tr>
        </tbody>
      </table>
    </Content>
  );
};