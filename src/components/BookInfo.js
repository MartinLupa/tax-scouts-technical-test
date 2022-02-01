import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../App";

const BookInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border-bottom: 1px solid lightgrey;
  padding: 5px;
  font-size: 0.85rem;
  display: flex;
  height: 100%;

  img {
    margin-right: 5px;
    width: 60px;
    height: 60px;
  }
  p {
    margin: 0;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 2px;
  }
`;

export const BookInfo = ({ uri, isbn, titleshort, author, onsaledate }) => {
  const { bookList } = useContext(GlobalContext);
  const [clickedIsbn, setClickedIsbn] = useState("");

  const handleBookDetail = (isbn) => {
    setClickedIsbn(isbn);
    const selectedBook = bookList.filter((book) => book.isbn === clickedIsbn);
    console.log(selectedBook);
  };
  return (
    <BookInfoWrapper onClick={() => handleBookDetail(isbn)}>
      <img src={uri} alt="" />
      <div>
        <h4>{titleshort}</h4>
        <p>{author}</p>
        <p>{onsaledate}</p>
      </div>
    </BookInfoWrapper>
  );
};
