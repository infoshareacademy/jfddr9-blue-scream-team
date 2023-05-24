import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";

function ConfirmationModal({ id, isAdd, attraction }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const buttonText = !isAdd ? "Add to list" : "Remove from list";
  const bodyText = isAdd ? "Added to list" : "Removed from list";
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (id) {
      dispatch(isAdd ? removeFromCart(id) : addToCart({ attraction, id }));
      toast("Dodano do listy", { type: "success" });
      setShow(true);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ zIndex: 999 }}>
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
