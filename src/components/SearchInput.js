import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../App";
import { DropdownMenu } from "../components/DropdownMenu";

const StyledInputWithIcon = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 300px;
  &:focus-within {
    outline: 1px solid darkgrey;
  }
  input {
    width: 100%;
    border: 0;
    &:focus {
      outline: none;
    }
  }
`;

export const SearchInput = ({ placeholder }) => {
  const { setSearchQuery } = useContext(GlobalContext);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <StyledInputWithIcon>
        <input
          onChange={handleSearchQuery}
          type="text"
          placeholder={placeholder}
        />
        <SearchOutlinedIcon />
      </StyledInputWithIcon>
      <DropdownMenu />
    </div>
  );
};
