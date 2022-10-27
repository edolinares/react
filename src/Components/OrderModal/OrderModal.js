import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import GeneralContext from "../../contexts/GeneralContext";

export const OrderModal = ({ showModal, onClose, onBuy, orderId }) => {
  const { buyer, setBuyer } = useContext(GeneralContext);
  const [emailf, setEmailf] = useState("");
  const [namef, setNamef] = useState("");
  const [phonef, setPhonef] = useState("");
  const handleEmail = (event) => {
    setEmailf(event.target.value);
  };
  const handleName = (event) => {
    setNamef(event.target.value);
  };
  const handlePhone = (event) => {
    setPhonef(event.target.value);
  };
  // Proceso donde se juntan los datos del comprador y se guardan en la variable buyer de GeneralContext, asi mismo se llama el proceso de finalizar compra
  const HandlePurchase = (e) => {
    e.preventDefault();
    const userDraft = [
      {
        user: namef,
        email: emailf,
        phone: phonef,
      },
    ];
    setBuyer(userDraft);
    onBuy();
  };

  return (
    <Modal show={showModal} onHide={onClose} className="modalContainer">
      <Modal.Header>
        <h3 className="ModalTitle">FINALIZA TU COMPRA</h3>
      </Modal.Header>
      <form className="formbox">
        <Modal.Body>
          <input
            type="text"
            className="data"
            placeholder="email"
            onChange={handleEmail}
            value={emailf}
            required
          />
          <input
            type="text"
            className="data"
            placeholder="name"
            onChange={handleName}
            value={namef}
            required
          />
          <input
            type="text"
            className="data"
            placeholder="phone"
            onChange={handlePhone}
            value={phonef}
            required
          />
        </Modal.Body>
        <Modal.Footer className="ModalFooter">
          {!orderId && (
            <>
              <button className="btnCancel" onClick={onClose}>
                Cancelar
              </button>
              <button
                className="btnBuy"
                onClick={(e) => {
                  HandlePurchase(e);
                }}
              >
                Comprar
              </button>
            </>
          )}
          {orderId && (
            <div className="footerOrderSuccess">
              <div>
                Gracias {namef} Su Orden es:{" "}
                <p className="myOrder">{orderId}</p>
              </div>
              <Link to="/" className="Close">
                <button className="btnClose" onClick={onClose}>
                  Cerrar
                </button>
              </Link>
            </div>
          )}
        </Modal.Footer>
      </form>
    </Modal>
  );
};
