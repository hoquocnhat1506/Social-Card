import React from "react";
import styles from "./styles.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};

function Delete() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={styles.custom}>
      <div className={styles["nav-main"]}>
        <div className={styles["custom-button"]}>
          <button onClick={openModal}>Add new</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className={styles["box-title"]}>
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                <div>Your about to delete a item</div>
              </h2>
              <form>
                <div className={styles.image}>
                  <img src="image/Trash.svg" alt="" />
                  <div className={styles.notice}>
                    This will delete your item form list Are you sure?
                  </div>
                </div>
              </form>
              <div className={styles["button-form"]}>
                <button>Delete</button>
                <button onClick={closeModal}>Cancel</button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default Delete;
