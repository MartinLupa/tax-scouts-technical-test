import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../App";

const StyledNavbar = styled.nav`
  background-color: #a6f2d3;
  height: 55px;
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
  const { setSearchQuery } = useContext(GlobalContext);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <StyledNavbar>
      <StyledInput
        onChange={handleSearchQuery}
        type="text"
        placeholder="Search by title.."
      />
    </StyledNavbar>
  );
};
