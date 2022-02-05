import React from "react";
import styled from "styled-components";
import { SearchInput } from "./SearchInput";

const StyledNavbar = styled.nav`
  background-color: #a6f2d3;
  height: 55px;
  display: flex;
  padding-right: 20px;
  align-items: center;
  justify-content: flex-end;
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <SearchInput placeholder={"Search by title or author.."} />
    </StyledNavbar>
  );
};
