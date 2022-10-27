import { addDoc, collection, getFirestore } from "firebase/firestore";

export const createOrder = (newOrder) => {
  const database = getFirestore();
  const collectionReference = collection(database, "orders");

  // Proceso para el manejo de las ordenes
  return addDoc(collectionReference, newOrder)
    .then((snapshot) => snapshot.id)
    .catch((error) => console.warn(error));
};
