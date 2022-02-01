import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../App";

const BookDetailsWrapper = styled.div`
  margin: 40px;
`;

export const BookDetails = () => {
  const { currentBook } = useContext(GlobalContext);

  console.log(currentBook);
  return (
    <BookDetailsWrapper>
      {/* <img src={currentBook[0]["@uri"]} alt="" /> */}
      <h2>{currentBook[0]?.title}</h2>
      <p>{currentBook[0]?.author}</p>
      <p>{currentBook[0]?.flapcopy.replace(/(<([^>]+)>)/gi, "")}</p>
      <p>{currentBook[0]?.formatname}</p>
      <p>{currentBook[0]?.imprint}</p>
      <p>{currentBook[0]?.isbn}</p>
      <p>{currentBook[0]?.onsaledate}</p>
      <p>{currentBook[0]?.pages}</p>
      <p>{currentBook[0]?.priceusa}</p>
      <p>{currentBook[0]?.formatname}</p>
    </BookDetailsWrapper>
  );
};
