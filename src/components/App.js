import React from "react";
import { Header } from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cards } from "./Cards";
import { CartsDetails } from "./CartsDetails";
// import { UserDeatils } from "./useReducer/UserDeatils";

import "../routes/NavBar.css";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CartsDetails />} />
      </Routes>
    </>
  );
};
