import React from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalContent = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};

const portal = document.getElementById("modal");

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portal)}
      {createPortal(<ModalContent>{children}</ModalContent>, portal)}
    </>
  );
};

export default Modal;
