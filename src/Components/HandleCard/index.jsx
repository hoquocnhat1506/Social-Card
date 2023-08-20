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
//Delete
function Delete() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // function deleteModal() {
  //   setIsOpen(true);
  // }

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
          <div className="delete-main">
            <div className={styles["box-title"]}>
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                <div>Your about to delete a item</div>
              </h2>
              <form>
                <div className={styles.image}>
                  <img src="image/Trash.svg" alt="" />
                  <div className={styles.notice}>
                    This will delete your item form list <br /> Are you sure?
                  </div>
                </div>
                <div className={styles["button-form"]}>
                  <button>Delete</button>
                  <button onClick={closeModal}>Cancel</button>
                </div>
              </form>
            </div>
          </div>

          {/* <div className={styles["list-item"]}>
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
                    <img onClick={deleteModal} src="image/Bin.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.text}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
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
                    <img onClick={deleteModal} src="image/Bin.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.text}>
                Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các
                thông tin: Avatar, Name, Description, Image
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
                    <img onClick={deleteModal} src="image/Bin.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.text}>
                Next, you select one property. It doesn’t matter which one you
                choose, yet it’s best to pick one that seems totally unrelated
                to your challenge.
              </div>
              <img className={styles.img} src="image/Elephent.svg" alt="" />
            </div>
          </div> */}

          {/* <button onClick={deleteModal}>Delete</button> */}
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          ></Modal>
        </div>
      </div>
    </div>
  );
}
export default Delete;
