import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  background-color: #a6f2d3;
  height: 80px;
  display: flex;
  padding-right: 20px;
  align-items: center;
  justify-content: flex-end;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  width: 300px;
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledInput type="text" placeholder="Search by title.." />
    </StyledNavbar>
  );
};
