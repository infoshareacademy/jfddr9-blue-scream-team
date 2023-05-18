import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

function ConfirmationModal({ id, isAdd }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const buttonText = !isAdd ? "Dodaj do listy" : "Usuń z listy";
  const bodyText = isAdd ? "Dodano do listy" : "Usunięto z listy";
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (id) {
      dispatch(isAdd ? removeFromCart(id) : addToCart(id));
      setShow(true);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>{bodyText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmationModal;
