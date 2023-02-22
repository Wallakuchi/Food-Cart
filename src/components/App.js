import { Header } from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Cards } from "./Cards";
import { CartsDetails } from "./CartsDetails";
export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CartsDetails />} />
      </Routes>
    </>
  );
};
