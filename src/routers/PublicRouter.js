import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PrivateRouter } from "./PrivateRouter";

export const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <PrivateRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
