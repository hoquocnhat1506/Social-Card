import React, { useState } from "react";
import Modal from "react-modal";
import Delete from "../DeleteCard"; // Adjusted path for Delete
import styles from "./styles.module.css";

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

function ListCard() {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
  }
  return (
    <div>
      <div className={styles["list-item"]}>
        <div className={styles["content-main"]}>
          <div className={styles.main}>
            <div className={styles.image}>
              <img src="image/Name.svg" alt="" />
            </div>
            <div className={styles["box-infor"]}>
              <div className={styles.information}>
                <div className={styles.fullname}>Phu Nguyen</div>
                <div className={styles.date}>14/08/2023</div>
              </div>
              <div className={styles.icoin}>
                <img src="image/Pen.svg" alt="" />
                <img onClick={openDeleteModal} src="image/Bin.svg" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.text}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
          <img className={styles.img} src="image/CatF.svg" alt="" />
        </div>
        <div className={styles["content-main"]}>
          <div className={styles.main}>
            <div className={styles.image}>
              <img src="image/Dog.svg" alt="" />
            </div>
            <div className={styles["box-infor"]}>
              <div className={styles.information}>
                <div className={styles.fullname}>Varen</div>
                <div className={styles.date}>14/08/2023</div>
              </div>
              <div className={styles.icoin}>
                <img src="image/Pen.svg" alt="" />
                <img onClick={openDeleteModal} src="image/Bin.svg" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.text}>
            Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các thông
            tin: Avatar, Name, Description, Image
          </div>
          <img className={styles.img} src="image/Baby.svg" alt="" />
        </div>
        <div className={styles["content-main"]}>
          <div className={styles.main}>
            <div className="image">
              <img src="image/Bottle.svg" alt="" />
            </div>
            <div className={styles["box-infor"]}>
              <div className={styles.information}>
                <div className={styles.fullname}>Mio</div>
                <div className={styles.date}>14/08/2023</div>
              </div>
              <div className={styles.icoin}>
                <img src="image/Pen.svg" alt="" />
                <img onClick={openDeleteModal} src="image/Bin.svg" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.text}>
            Next, you select one property. It doesn’t matter which one you
            choose, yet it’s best to pick one that seems totally unrelated to
            your challenge.
          </div>
          <img className={styles.img} src="image/Elephent.svg" alt="" />
        </div>
      </div>

      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        style={customStyles}
        contentLabel="Delete Modal"
      >
        <Delete closeModal={closeDeleteModal} />
      </Modal>
    </div>
  );
}
export default ListCard;
