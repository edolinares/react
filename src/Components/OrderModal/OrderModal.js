import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
//import CartContext from "../../contexts/CartContext";
import GeneralContext from "../../contexts/GeneralContext";


export const OrderModal = ({ showModal, onClose, onBuy, orderId }) => {
  const {item} = useContext(GeneralContext);
  console.log(item)
  //const { data } = useContext(CartContext);
  const [emailf, setEmailf] = useState("");
  const [namef, setNamef] = useState("");
  const [phonef, setPhonef] = useState("");
  //console.log(data.buyer);

  const handleEmail = (event) => {
    setEmailf(event.target.value);
  };
  const handleName = (event) => {
    setNamef(event.target.value);
  };
  const handlePhone = (event) => {
    setPhonef(event.target.value);
  };

  const theuser = (e) => {
    e.preventDefault();
    const userDraft = [
      {
        user: namef,
        email: emailf,
        phone: phonef,
      },
    ];
    //console.log(userDraft);
    //   data.setBuyer(userDraft);
    onBuy();
  };







  
  return (

    <Modal show={showModal} onHide={onClose} className="modalContainer">
      <Modal.Header>
        <h3 className="ModalTitle">FINALIZA TU COMPRA</h3>
      </Modal.Header>


          <form
            className="formbox"
            //onSubmit={handleSubmit}
          >
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
                      theuser(e);

                      // onBuy();
                    }}
                  >
                    Comprar
                  </button>
                </>
              )}
              {orderId && (
                <div className="footerOrderSuccess">
                  <div>
                    Su Orden es: <p className="myOrder">{orderId}</p>
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
