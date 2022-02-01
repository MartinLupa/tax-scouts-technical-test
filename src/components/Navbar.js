import React, { useEffect, useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://reststop.randomhouse.com/resources/titles?title=${searchQuery}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

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
