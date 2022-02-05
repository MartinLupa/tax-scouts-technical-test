import { ErrorBoundary } from "react-error-boundary";
import styled, { createGlobalStyle } from "styled-components";
import { PublicRouter } from "./routers/PublicRouter";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  height: 100vh;
  width: 100%;
}`;

const AppWrapper = styled.div`
  font-family: "Mulish", sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

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
    <>
      <GlobalStyle />
      <AppWrapper>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <PublicRouter />
        </ErrorBoundary>
      </AppWrapper>
    </>
  );
}

export default App;
