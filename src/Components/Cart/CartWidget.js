import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import { Badge } from "react-bootstrap";
import { useContext } from "react";

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return ( 
    <>
      <Link to="/cart">
        <FaShoppingCart className="svg" />
      </Link>
      {totalQuantity > 0 && (
        <Badge pill bg="danger">
          {totalQuantity}
        </Badge>
      )}
    </>
  );
};
