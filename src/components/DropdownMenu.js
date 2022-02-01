import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../App";
import { BookInfo } from "./BookInfo";

const DropdownWrapper = styled.div`
  position: absolute;
  right: 15px;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow-y: scroll;
  border: 1px solid lightgrey;
  border-radius: 3px;
  display: flex;
  margin: 5px;
  height: 350px;
  width: 322px;
  ul {
    padding: 0;
  }
`;

export const DropdownMenu = () => {
  const { bookList, searchQuery } = useContext(GlobalContext);
  return (
    <div>
      {searchQuery ? (
        <DropdownWrapper>
          <ul>
            {bookList?.map((book) => (
              <li key={book.isbn}>
                <BookInfo
                  uri={book["@uri"]}
                  titleshort={book.titleshort}
                  author={book.author}
                  authorweb={book.authorweb}
                  isbn={book.isbn}
                  onsaledate={book.onsaledate}
                />
              </li>
            ))}
          </ul>
        </DropdownWrapper>
      ) : null}
    </div>
  );
};
