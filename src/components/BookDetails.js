import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { device } from "../styles/device-queries";

const BookDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 40px;
  display: flex;
  max-width: 1200px;
  text-align: justify;
  img {
    height: 500px;
    width: 400px;
    padding: 40px;
    margin: 20px;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  a {
    text-decoration: none;
  }
  @media ${device.laptop} {
    flex-direction: column;
  }
  @media ${device.mobile} {
    img {
      width: 100%;
      height: auto;
      padding: 5px;
      margin: 5px;
    }
  }
`;

export const BookDetails = () => {
  const { defined, bookInfo } = useSelector(
    (state) => state.currentBookReducer
  );

  // Amazon search example
  // https://www.amazon.es/s?k=influence+is+your+superpower

  return (
    <div>
      {defined ? (
        <BookDetailsWrapper>
          <img src={bookInfo["@uri"]} alt={bookInfo?.titleshort} />
          <div>
            <h2>{bookInfo?.titleshort}</h2>
            <p>
              <b>Author:</b> {bookInfo?.author}
            </p>
            <p>
              {bookInfo?.flapcopy?.length > 0
                ? bookInfo.flapcopy
                    .substring(0, 1000)
                    .replace(/(<([^>]+)>)/gi, "") + "..."
                : null}
            </p>
            <p>
              <b>Format:</b> {bookInfo?.formatname}
            </p>
            <p>
              <b>Imprint:</b> {bookInfo?.imprint}
            </p>
            <p>
              <b>ISBN:</b> {bookInfo?.isbn}
            </p>
            <p>
              <b>Published:</b> {bookInfo?.onsaledate}
            </p>
            <p>
              <b>Length:</b> {bookInfo?.pages} Pages
            </p>
            <p>
              <b>Price:</b> EUR{bookInfo?.priceusa}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.amazon.es/s?k=${bookInfo.titleshort.replaceAll(
                " ",
                "+"
              )}`}
            >
              Check it on Amazon
            </a>
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
