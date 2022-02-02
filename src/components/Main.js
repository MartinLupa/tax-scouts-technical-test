import React from "react";
import styled from "styled-components";
import { BookDetails } from "./BookDetails";

const MainWrapper = styled.div`
  height: 100%;
`;

export const Main = () => {
  return (
    <MainWrapper>
      <BookDetails />
    </MainWrapper>
  );
};
