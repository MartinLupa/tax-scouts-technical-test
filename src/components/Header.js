import React from "react";
import styled from "styled-components";
import logo from "../images/logo.JPG";

const StyledHeader = styled.div`
  height: 55px;
  display: flex;
  padding-right: 20px;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid black;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="TaxScouts brand logo" />
    </StyledHeader>
  );
};
