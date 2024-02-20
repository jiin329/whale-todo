import { Modal } from "reactstrap";

interface Props {
  isOpen: any;
  setIsOpen: any;
}

export default function Alerts({ isOpen, setIsOpen }: Props) {
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <Modal className="modal-dialog-centered" isOpen={isOpen} toggle={onClose}>
        <div className="modal-body">
          <span className="alert-inner--icon">
            <i className="ni ni-like-2" />
          </span>{" "}
          <span className="alert-inner--text">
            <strong>경고!</strong> This is a warning alert—check it out that has
            an icon too!
          </span>
        </div>
      </Modal>
    )
  );
}
