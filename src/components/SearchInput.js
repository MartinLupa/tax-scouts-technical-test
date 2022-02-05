import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { DropdownMenu } from "../components/DropdownMenu";
import useFetchBooks from "../hooks/useFetchBooks";
import { setBookList, setSearchQuery } from "../redux/actions/actions";

const StyledInputWithIcon = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 2px;
  height: 40px;
  width: 300px;
  &:focus-within {
    outline: 1px solid darkgrey;
  }
  input {
    height: 80%;
    width: 100%;
    border: 0;
    &:focus {
      outline: none;
    }
  }
  .icon:hover {
    cursor: pointer;
  }
`;

export const SearchInput = ({ placeholder }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchQueryReducer);
  const APISearchQuery = searchQuery.replace(" ", "%");

  const handleSearchQuery = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleCloseDropdown = () => {
    dispatch(setSearchQuery(""));
  };

  useFetchBooks(
    APISearchQuery,
    `https://reststop.randomhouse.com/resources/titles?search=${APISearchQuery}`,
    setBookList
  );

  return (
    <div id="search-bar">
      <StyledInputWithIcon>
        <input
          onChange={handleSearchQuery}
          type="text"
          placeholder={placeholder}
          value={searchQuery}
        />

        {searchQuery?.length > 0 ? (
          <CloseOutlinedIcon onClick={handleCloseDropdown} className="icon" />
        ) : (
          <SearchOutlinedIcon />
        )}
      </StyledInputWithIcon>
      <DropdownMenu />
    </div>
  );
};
