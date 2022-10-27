import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { getAllProducts, getProductsByCategory } from "../../Utils/Products";
import { Link, useParams } from "react-router-dom";

export const Items = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error));
    } else {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error));
    }
  }, [categoryId]);

  // Componente para las CARDS que muestran los productos principales con su descripcion corta dependiendo de home o su categoria
  return (
    <div className="Containers">
      {products.map((product) => (
        <Card className="Card" key={product.id}>
          <Card.Img variant="top" src={product.pictureUrl} />
          <Card.Body>
            <h4 className="CardTitle">{product.title}</h4>
            <p className="CardText">{product.description}</p>
            <Link to={`/item/${product.id}`}>
              <button className="CardButton">Ver detalles</button>
            </Link>
          </Card.Body>
        </Card>
      ))}
      ;
    </div>
  );
};
