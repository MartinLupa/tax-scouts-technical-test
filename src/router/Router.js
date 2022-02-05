import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookDetails } from "../components/BookDetails";
import { Navbar } from "../components/Navbar";
import { Main } from "../pages/Main";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books/:isbn" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
