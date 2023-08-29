import Modal from "react-modal";
import styles from "./styles.module.css";
import React, { useState } from "react";

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

function EditItem() {
  //click  to count
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const subtitleRef = React.useRef(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function afterOpenModal() {
    if (subtitleRef.current) {
      subtitleRef.current.style.color = "#f00";
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className={styles.card}>
        <div ref={subtitleRef} className={styles["card-title"]}>
          <div>SOCIAL CARD DETAIL</div>
        </div>
        <div className={styles["card-image"]}>
          <div className={styles.content}>
            <div className={styles["card-main"]}>
              <div className={styles.image}>
                <img src="image/Dog.svg" alt="" />
              </div>
              <div className={styles["card-name"]}>
                <div className={styles.name}>Binance</div>
                <div className={styles.date}>22/04/2021 (day create)</div>
              </div>
            </div>

            <div className={styles["card-text"]}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more- or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </div>
            <div className={styles["card-image-main"]}>
              <img src="image/BackGround.png" alt="" />
            </div>
            <div className={styles["icoin-detail"]}>
              <div className={styles["icoin-tym"]}>
                <img onClick={increaseCount} src="image/Heart.svg" alt="" />{" "}
                {count}
              </div>
              <div className={styles["icoin-message"]}>
                <img src="image/Message.svg" alt="" />
                <div>1</div>
              </div>
            </div>
            <div className={styles["text-detail"]}>
              <div className={styles.text}>
                <div className={styles["text-main"]}>
                  <div className="date">22/04/2021 (day create)</div>
                  <div className="text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more- or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </div>
                </div>
                <div className={styles["text-main"]}>
                  <div className="date">22/04/2021 (day create)</div>
                  <div className="text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more- or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </div>
                </div>
              </div>

              <div className={styles.post}>
                <div className={styles.postmain}>Post a new coment</div>
                <input
                  className={styles.boxinput}
                  type="text"
                  placeholder="Add comment..."
                />
                <button type="submit">
                  <div className={styles.button}>Post</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      ></Modal>
    </div>
  );
}

export default EditItem;
