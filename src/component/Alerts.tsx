import { Modal } from "reactstrap";
import { Alearts } from "../types/types";

export default function Alerts({ isOpen, setIsOpen, msg }: Alearts) {
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal className="modal-dialog-centered" isOpen={isOpen} toggle={onClose}>
      <div className="modal-body">
        <span className="alert-inner--icon">
          <i className="fa fa-exclamation-circle" />
        </span>{" "}
        <span className="alert-inner--text">{msg}</span>
      </div>
    </Modal>
  );
}
