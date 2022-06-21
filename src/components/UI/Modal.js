import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";
/* here we will be using portals:
in the index html add div with id = "overlays" - for portal usage */

const Backdrop = (props) => {
  /* so here, in backdrops we also can close the Cart so we should call the too. So we define our onClick pops*/
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

/*Portals receive two arguments: what to portal and where */
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  /* here we gat onClose propps from Modal props and pass it through Modal */
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};
export default Modal;
