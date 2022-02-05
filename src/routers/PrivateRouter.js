import { Route, Routes } from "react-router-dom";
import { BookDetails } from "../components/BookDetails";
import { Navbar } from "../components/Navbar";
import { Main } from "../pages/Main";

export const PrivateRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/books" element={<Main />} />
        <Route path="/books/:isbn" element={<BookDetails />} />
      </Routes>
    </>
  );
};
