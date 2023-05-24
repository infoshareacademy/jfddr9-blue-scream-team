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
  const bodyText = isAdd
    ? "You might join the lists. To view the travel list go to the travel list."
    : "Select another attraction!";
  const titleText = isAdd ? "Added to list" : "Removed from list!";
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (id) {
      dispatch(isAdd ? removeFromCart(id) : addToCart({ attraction, id }));
      setShow(true);
    }
    // setTimeout(() => {
    //   setShow(false)
    // }, 3000)
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ zIndex: 999, width: "100%", marginLeft: "0" }}
      >
        {buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          // closeButton (odkomentuj a będzie działać)
          className="modal-header"
        >
          <Modal.Title>{titleText}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">{bodyText}</Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button
            variant="secondary"
            onClick={handleClose}
            className="modal-button"
          >
            OK!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmationModal;
