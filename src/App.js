import { createContext, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "./App.css";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { setBookList } from "./redux/actions/actions";

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
  const searchQuery = useSelector((state) => state.searchQueryReducer);
  const APISearchQuery = searchQuery.replace(" ", "%");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery === "") {
      setBookList([]);
    }
    fetch(
      `https://reststop.randomhouse.com/resources/titles?search=${APISearchQuery}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => dispatch(setBookList(data.title)));
  }, [searchQuery]);

  return (
    <AppWrapper>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar />
        <Main />
      </ErrorBoundary>
    </AppWrapper>
  );
}

export default App;
