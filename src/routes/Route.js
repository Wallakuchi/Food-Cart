import { Routes, Route as Rte } from "react-router-dom";
import { Home, About, Product, Profile, Login } from "./pages";
import { RequireAuth } from "./requireAuth";
export const Route = () => {
  return (
    <>
      <Routes>
        <Rte path="home" element={<Home />} />
        <Rte path="about" element={<About />} />
        <Rte path="product" element={<Product />} />
        <Rte
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />

        <Rte path="login" element={<Login />} />
      </Routes>
    </>
  );
};
