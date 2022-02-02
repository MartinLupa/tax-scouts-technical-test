import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
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
  const bookList = useSelector((state) => state.bookListReducer);
  const searchQuery = useSelector((state) => state.searchQueryReducer);

  return (
    <div>
      {searchQuery ? (
        <DropdownWrapper>
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
