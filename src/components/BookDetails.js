import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../App";

const BookDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 40px;
  display: flex;
  max-width: 1200px;
  text-align: justify;
  img {
    padding: 40px;
    margin: 20px;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const BookDetails = () => {
  const { currentBook } = useContext(GlobalContext);

  return (
    <div>
      {currentBook.length === 1 ? (
        <BookDetailsWrapper>
          <img src={currentBook[0]["@uri"]} alt="" />
          <div>
            <h2>{currentBook[0]?.titleshort}</h2>
            <p>
              <b>Author:</b> {currentBook[0]?.author}
            </p>
            <p>
              {currentBook[0]?.flapcopy
                .substring(0, 1000)
                .replace(/(<([^>]+)>)/gi, "") + "..."}
            </p>
            <p>
              <b>Format:</b> {currentBook[0]?.formatname}
            </p>
            <p>
              <b>Imprint:</b> {currentBook[0]?.imprint}
            </p>
            <p>
              <b>ISBN:</b> {currentBook[0]?.isbn}
            </p>
            <p>
              <b>Published:</b> {currentBook[0]?.onsaledate}
            </p>
            <p>
              <b>Length:</b> {currentBook[0]?.pages} Pages
            </p>
            <p>
              <b>Price:</b> EUR{currentBook[0]?.priceusa}
            </p>
          </div>
        </BookDetailsWrapper>
      ) : (
        <BookDetailsWrapper>
          <h2>Search for a book</h2>
        </BookDetailsWrapper>
      )}
    </div>
  );
};
