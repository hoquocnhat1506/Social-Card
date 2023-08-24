import React, { useState } from "react";
import styles from "./styles.module.css";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
const url = "https://api.cloudinary.com/v1_1/dvdmubcjl/image/upload";

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

function Button() {
  //
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedAvatar1PictureFiles, setSelectedAvatar1PictureFiles] =
    useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);

  const uploadFile = (e) => {
    e.preventDefault();

    console.log({ selectedFiles });

    for (let i = 0; i < selectedFiles.length; i++) {
      let formData = new FormData();
      let file = selectedFiles[i];
      console.log({ file });
      formData.append("file", file);
      formData.append("upload_preset", "fbl82nnu");

      axios.post(url, formData).then((res) => {
        console.log(res.data);
        setSelectedFiles([]);
      });
    }
  };

  let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newCard = {
      avatar: selectedFiles[0],
      name: data.notice1,
      description: data.notice2,
      picture: selectedFiles[1],
      avatar1Picture: selectedAvatar1PictureFiles[0],
    };
    setCards((prevCards) => [...prevCards, newCard]);
    closeModal();
  };
  //curent day
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  //open delete
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [selectedDeleteIndex, setSelectedDeleteIndex] = useState(null);
  function openDeleteModal(index) {
    setSelectedDeleteIndex(index);
    setDeleteModalIsOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
  }
  //value delete
  const onDeleteConfirm = () => {
    if (selectedDeleteIndex !== null) {
      const updatedCards = cards.filter(
        (_, index) => index !== selectedDeleteIndex
      );
      setCards(updatedCards);
      setSelectedDeleteIndex(null);
      closeDeleteModal();
    }
  };
  //ipload img
  // const [file, setFile] = useState();
  // function handleChange(e) {
  //   console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }

  return (
    <div className={styles.custom}>
      <div className="content">
        <div className="title">LIST SOCIAL CARD</div>
      </div>
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
            <div className={styles["box-modal"]}>
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add new card</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div
                    className={
                      errors.avatar ? styles.invalidLabel : styles.validLabel
                    }
                  >
                    <div className={styles.name}>
                      Avatar <span>*</span>
                    </div>
                    <input
                      type="file"
                      id="avatarInput"
                      accept="image/*"
                      style={{ opacity: "1" }}
                      onChange={(e) => {
                        let newFilesArray = [];
                        let { files } = e.target;

                        console.log(files);

                        let length = files.length;
                        for (let i = 0; i < length; i++) {
                          let currentFile = files[i];
                          newFilesArray.push(currentFile);
                          console.log({ currentFile });
                        }

                        setSelectedFiles(newFilesArray);
                      }}
                      multiple
                      {...register("avatar", { required: true })}
                      className={
                        errors.avatar ? styles.invalidInput : styles.validInput
                      }
                    />
                    {errors.avatar && (
                      <p className={styles.error}>{errors.avatar.message}</p>
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="19.997"
                      viewBox="0 0 20 19.997"
                    >
                      <path
                        id="upload-solid"
                        d="M11.562,15.072H8.438a.935.935,0,0,1-.938-.937V7.572H4.074A.78.78,0,0,1,3.523,6.24L9.465.295a.757.757,0,0,1,1.066,0L16.477,6.24a.78.78,0,0,1-.551,1.332H12.5v6.563A.935.935,0,0,1,11.562,15.072ZM20,14.76v4.375a.935.935,0,0,1-.937.938H.937A.935.935,0,0,1,0,19.135V14.76a.935.935,0,0,1,.937-.937H6.25v.313a2.189,2.189,0,0,0,2.188,2.187h3.125a2.189,2.189,0,0,0,2.188-2.187v-.312h5.313A.935.935,0,0,1,20,14.76ZM15.156,18.2a.781.781,0,1,0-.781.781A.784.784,0,0,0,15.156,18.2Zm2.5,0a.781.781,0,1,0-.781.781A.784.784,0,0,0,17.656,18.2Z"
                        transform="translate(0 -0.075)"
                        fill="#064ebc"
                      />
                    </svg>
                    <div className={styles.upload}>Upload image</div>
                  </div>
                </div>
                <div
                  className={
                    errors.notice1 ? styles.invalidLabel : styles.validLabel
                  }
                >
                  <div className={styles.name}>
                    Name <span>*</span>
                  </div>
                  <input
                    type="text"
                    id="notice1"
                    {...register("notice1", { required: true })}
                    className={
                      errors.notice1 ? styles.invalidInput : styles.validInput
                    }
                  />
                </div>
                <div
                  className={
                    errors.notice2 ? styles.invalidLabel : styles.validLabel
                  }
                >
                  <div className={styles.des}>
                    Description <span>*</span>
                  </div>
                  <input
                    type="text"
                    id="notice2"
                    {...register("notice2", { required: true })}
                    className={
                      errors.notice2 ? styles.invalidInput : styles.validInput
                    }
                  />
                </div>
                <div className={styles.avatar1}>
                  <div>Image</div>
                  <input
                    type="file"
                    id="avatar1Input"
                    accept="image/*"
                    style={{ opacity: "0" }}
                    onChange={(e) => {
                      let newFilesArray = [];
                      let { files } = e.target;

                      console.log(files);

                      let length = files.length;
                      for (let i = 0; i < length; i++) {
                        let currentFile = files[i];
                        newFilesArray.push(currentFile);
                        console.log({ currentFile });
                      }

                      setSelectedAvatar1PictureFiles(newFilesArray);
                    }}
                    multiple
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19.997"
                    viewBox="0 0 20 19.997"
                  >
                    <path
                      id="upload-solid"
                      d="M11.562,15.072H8.438a.935.935,0,0,1-.938-.937V7.572H4.074A.78.78,0,0,1,3.523,6.24L9.465.295a.757.757,0,0,1,1.066,0L16.477,6.24a.78.78,0,0,1-.551,1.332H12.5v6.563A.935.935,0,0,1,11.562,15.072ZM20,14.76v4.375a.935.935,0,0,1-.937.938H.937A.935.935,0,0,1,0,19.135V14.76a.935.935,0,0,1,.937-.937H6.25v.313a2.189,2.189,0,0,0,2.188,2.187h3.125a2.189,2.189,0,0,0,2.188-2.187v-.312h5.313A.935.935,0,0,1,20,14.76ZM15.156,18.2a.781.781,0,1,0-.781.781A.784.784,0,0,0,15.156,18.2Zm2.5,0a.781.781,0,1,0-.781.781A.784.784,0,0,0,17.656,18.2Z"
                      transform="translate(0 -0.075)"
                      fill="#064ebc"
                    />
                  </svg>
                  <div className={styles.upload}>Upload image</div>
                </div>
                <div className={styles["button-form"]}>
                  <button type="submit">Save</button>
                  <button onClick={closeModal}>Cancel</button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
        <div className={styles["custom-search"]}>
          <div className={styles["sreach-main"]}>
            <input type="text" placeholder="Search name..."></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.7656 16.6895L12.6934 11.6172C13.4805 10.5996 13.9062 9.35547 13.9062 8.04688C13.9062 6.48047 13.2949 5.01172 12.1895 3.9043C11.084 2.79687 9.61133 2.1875 8.04688 2.1875C6.48242 2.1875 5.00977 2.79883 3.9043 3.9043C2.79687 5.00977 2.1875 6.48047 2.1875 8.04688C2.1875 9.61133 2.79883 11.084 3.9043 12.1895C5.00977 13.2969 6.48047 13.9062 8.04688 13.9062C9.35547 13.9062 10.5977 13.4805 11.6152 12.6953L16.6875 17.7656C16.7024 17.7805 16.72 17.7923 16.7395 17.8004C16.7589 17.8084 16.7797 17.8126 16.8008 17.8126C16.8218 17.8126 16.8427 17.8084 16.8621 17.8004C16.8815 17.7923 16.8992 17.7805 16.9141 17.7656L17.7656 16.916C17.7805 16.9011 17.7923 16.8835 17.8004 16.864C17.8084 16.8446 17.8126 16.8238 17.8126 16.8027C17.8126 16.7817 17.8084 16.7609 17.8004 16.7414C17.7923 16.722 17.7805 16.7043 17.7656 16.6895ZM11.1406 11.1406C10.3125 11.9668 9.21484 12.4219 8.04688 12.4219C6.87891 12.4219 5.78125 11.9668 4.95312 11.1406C4.12695 10.3125 3.67188 9.21484 3.67188 8.04688C3.67188 6.87891 4.12695 5.7793 4.95312 4.95312C5.78125 4.12695 6.87891 3.67188 8.04688 3.67188C9.21484 3.67188 10.3145 4.125 11.1406 4.95312C11.9668 5.78125 12.4219 6.87891 12.4219 8.04688C12.4219 9.21484 11.9668 10.3145 11.1406 11.1406Z"
                fill="#DFDFDF"
              />
            </svg>
          </div>
        </div>
      </div>
      <Modal
        isOpen={deleteModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalIsOpen && <div className={styles["box-modal"]}></div>}
        <div className={styles["nav"]}>
          <div className={styles["custom-but"]}>
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
                    <button onClick={onDeleteConfirm}>Delete</button>
                    <button onClick={closeDeleteModal}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Delete Modal"
            ></Modal>
          </div>
        </div>
      </Modal>

      <div className={styles["social-card"]}>
        {cards.map((card, index) => (
          <div key={index} className={styles["content-main"]}>
            <div className={styles.main}>
              <div className={styles.image}>
                {card.avatar && <img src={card.avatar} alt="Avatar" />}
              </div>
              <div className={styles["box-infor"]}>
                <div className={styles.information}>
                  <div className={styles.fullname}>{card.name}</div>
                  <div className={styles.date}>{date}</div>
                </div>
                <div className={styles.icoin}>
                  <img src="image/Pen.svg" alt="" />
                  <img
                    onClick={() => openDeleteModal(index)}
                    src="image/Bin.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.text}>{card.description}</div>
            {card.picture && <img src={card.picture} alt="Picture" />}
            {card.avatar1Picture && (
              <img src={card.avatar1Picture} alt="Avatar1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Button;
