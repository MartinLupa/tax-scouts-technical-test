import { createContext } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";
import "./App.css";
import { Router } from "./router/Router";

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
  return (
    <AppWrapper>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router />
      </ErrorBoundary>
    </AppWrapper>
  );
}

export default App;
