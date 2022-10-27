import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import { Badge } from "react-bootstrap";
import { useContext } from "react";

export const CartWidget = () => {
  // Obtenemos los datos del la cantidad de elementos del carrito para el Badge
  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <Link to="/cart">
        <FaShoppingCart className="svg" />
      </Link>
      {/* Podriamos aqui poner una condicion para mostrarse o no, pero por gusto y utilidad se decide dejar  */}
      <Badge pill bg="secondary">
        {totalQuantity}
      </Badge>
    </>
  );
};
