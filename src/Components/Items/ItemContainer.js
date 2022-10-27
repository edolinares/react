import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProduct } from "../../Utils/Products";
import ItemDetail from "./ItemDetail";

const ItemContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    getProduct(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.warn(error));
  }, [id]);
  // Contenedor del detalle de producto
  return (
    <Container>
      {product && <ItemDetail product={product} />}
    </Container>
  );
};

export default ItemContainer;
