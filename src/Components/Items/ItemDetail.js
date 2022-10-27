import React from "react";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);
  const handleAdd = (value) => {
    setCount(value);
    setShowItemCount(false);
    addItem(product, value);
  };

  //Componente que muestra el detalle de cada uno de los productos
  return (
    <div className="wrapper" >
      <div className="product-img">
        <img src={product.pictureUrl} height="420" width="327" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h2>{product.title}</h2>
          <h3>{product.category}</h3>
          <p>{product.longdesc}</p>
        </div>
        <div className="product-price-btn">
          <span>${product.price}</span>
        </div>
        {showItemCount && <ItemCount min={1} max={10} onAdd={handleAdd} />}
        {!showItemCount && (
          <Link to="/cart">
            <button variant="success">Checkout</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
