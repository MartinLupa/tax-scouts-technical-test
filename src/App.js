import { createContext, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";
import "./App.css";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";

const AppWrapper = styled.div`
  font-family: "Mulish", sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

export const GlobalContext = createContext();

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  const [bookList, setBookList] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentBook, setCurrentBook] = useState();

  useEffect(() => {
    if (searchQuery === "") {
      setBookList([]);
    }
    fetch(
      `https://reststop.randomhouse.com/resources/titles?title=${searchQuery}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => setBookList(data.title));
  }, [searchQuery]);

  return (
    <AppWrapper>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GlobalContext.Provider
          value={{
            bookList,
            setBookList,
            searchQuery,
            setSearchQuery,
            currentBook,
            setCurrentBook,
          }}
        >
          <Navbar />
          <Main />
        </GlobalContext.Provider>
      </ErrorBoundary>
    </AppWrapper>
  );
}

export default App;
