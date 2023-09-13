const Modal = ({ openModal, content, onCancel }) => {
  return (
    <>
      {openModal && (
        <div onClick={onCancel} className="container-modal">
          <div className="wrap-modal">
            <button onClick={onCancel} className="modal-btn">
              <i className="fa fa-close"></i>
            </button>
            <p className="modal-desc">{content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
