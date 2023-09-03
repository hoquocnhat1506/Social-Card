import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";

function EditItem() {
  // Initialize state variables with local storage values or default values
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount) : 1;
  });

  const [comment, setComment] = useState(() => {
    const storedComment = localStorage.getItem("comment");
    return storedComment || "";
  });

  const [inputError, setInputError] = useState(() => {
    const storedInputError = localStorage.getItem("inputError");
    return storedInputError === "true"; // Convert the string to a boolean
  });

  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem("comments");
    return storedComments ? JSON.parse(storedComments) : [];
  });

  const [messageCount, setMessageCount] = useState(() => {
    const storedMessageCount = localStorage.getItem("messageCount");
    return storedMessageCount ? parseInt(storedMessageCount) : 0;
  });

  // Update local storage whenever state variables change
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  useEffect(() => {
    localStorage.setItem("comment", comment);
  }, [comment]);

  useEffect(() => {
    localStorage.setItem("inputError", inputError.toString());
  }, [inputError]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    localStorage.setItem("messageCount", messageCount.toString());
  }, [messageCount]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
    setInputError(false);
  };

  const handlePostClick = () => {
    if (comment.trim() === "") {
      setInputError(true);
    } else {
      // Add the new comment to the comments state
      setComments([...comments, comment]);
      // Increment the message count
      setMessageCount(messageCount + 1);
      // Reset the input and input error after posting
      setComment("");
      setInputError(false);
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      // Prevent the default behavior of the "Enter" key (e.g., form submission)
      e.preventDefault();
      // Call the handlePostClick function to submit the comment
      handlePostClick();
    }
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div>
      <div className={styles.card}>
        <div className={styles["card-title"]}>
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
                <div>{messageCount}</div>
              </div>
            </div>
            <div className={styles["text-detail"]}>
              <div className={styles.text}>
                {comments.map((comment, index) => (
                  <div className={styles["text-main"]} key={index}>
                    <div className="date">{date} (day create)</div>
                    <div className="text">{comment}</div>
                  </div>
                ))}
              </div>

              <div className={styles.post}>
                <div className={styles.postmain}>Post a new comment</div>
                <input
                  className={
                    inputError ? styles.errorBoxInput : styles.boxinput
                  }
                  type="text"
                  placeholder="Add comment..."
                  value={comment}
                  onChange={handleInputChange}
                  onKeyPress={handleInputKeyPress}
                />
                <button type="submit" onClick={handlePostClick}>
                  <div className={styles.button}>Post</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditItem;
