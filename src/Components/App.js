import React from "react";
import { Items } from "./Items/Items";
import { NavBar } from "./NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cart } from "./Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemContainer from "./Items/ItemContainer";
import { CartProvider } from "../contexts/CartContext";
import "./style.css";
import { GeneralProvider } from "../contexts/GeneralContext";

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/home">
        <GeneralProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Items greeting={"Home"} />} />
              <Route
                path="/category/:categoryId"
                element={<Items greeting={"Categories"} />}
              />
              <Route path="/item/:id" element={<ItemContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CartProvider>
        </GeneralProvider>
      </BrowserRouter>
    </>
  );
};
