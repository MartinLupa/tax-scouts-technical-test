import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSearchQuery } from "../redux/actions/actions";
import { BookInfo } from "./BookInfo";

const DropdownWrapper = styled.div`
  position: absolute;
  right: 15px;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
  overflow-y: auto;
  border: 1px solid lightgrey;
  border-radius: 3px;
  display: flex;
  margin: 5px;
  height: 30%;
  width: 320px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DropdownMenu = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookListReducer.bookList);
  const searchQuery = useSelector((state) => state.searchQueryReducer);
  let dropdownRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        dispatch(setSearchQuery(""));
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div>
      {searchQuery ? (
        <DropdownWrapper ref={dropdownRef}>
          {bookList?.map((book) => (
            <div key={book.isbn}>
              <BookInfo
                uri={book["@uri"]}
                titleshort={book.titleshort}
                author={book.author}
                authorweb={book.authorweb}
                isbn={book.isbn}
                onsaledate={book.onsaledate}
              />
            </div>
          ))}
        </DropdownWrapper>
      ) : null}
    </div>
  );
};
