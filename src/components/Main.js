import React from "react";
import styled from "styled-components";
import { BookDetails } from "./BookDetails";
import { DropdownMenu } from "./DropdownMenu";

const MainWrapper = styled.div`
  position: relative;
  height: 100%;
  ul {
    list-style: none;
  }
`;

export const Main = () => {
  return (
    <MainWrapper>
      <DropdownMenu />
      <BookDetails />
    </MainWrapper>
  );
};
