import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrentBook } from "../redux/actions/actions";

const BookInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #faf8f5;
  font-size: 0.85rem;
  display: flex;
  height: 100%;
  img {
    cursor: pointer;
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
  &:hover {
    background-color: #f0efed;
  }
`;

export const BookInfo = ({ uri, isbn, titleshort, author, onsaledate }) => {
  // const { bookList } = useContext(GlobalContext);
  const bookList = useSelector((state) => state.bookListReducer);
  const dispatch = useDispatch();

  const handleBookDetail = (isbn) => {
    const selectedBook = bookList.filter((book) => book.isbn === isbn);

    dispatch(setCurrentBook(...selectedBook));
  };

  return (
    <BookInfoWrapper>
      <img onClick={() => handleBookDetail(isbn)} src={uri} alt={uri} />
      <div>
        <h4>{titleshort}</h4>
        <p>{author}</p>
        <p>{onsaledate}</p>
      </div>
    </BookInfoWrapper>
  );
};
