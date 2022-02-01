import { useEffect } from "react";
import styled from "styled-components";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";

const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: grey;
`;

// "https://reststop.randomhouse.com/resources/authors?lastName=brown&firstName=dan"

function App() {
  return (
    <StyledWrapper>
      <Navbar />
      <Main />
    </StyledWrapper>
  );
}

export default App;
