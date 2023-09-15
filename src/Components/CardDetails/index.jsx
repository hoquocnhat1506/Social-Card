import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Heart from "../../assets/imgs/Heart.svg";
import Message from "../../assets/imgs/Message.svg";
import { v4 as uuidv4 } from "uuid";

function EditItem() {
  const location = useLocation();
  const card = location.state.card;

  const [comment, setComment] = useState(() => {
    const storedComment = localStorage.getItem("comment");
    return storedComment || "";
  });

  const [inputError, setInputError] = useState(() => {
    const storedInputError = localStorage.getItem("inputError");
    return storedInputError === "true";
  });

  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem("comments");
    return storedComments ? JSON.parse(storedComments) : [];
  });

  const [messageCount, setMessageCount] = useState(0);
  if (!card.id) {
    card.id = uuidv4();
  }
  const cardId = card.id;
  const [cardHeartInitialized, setCardHeartInitialized] = useState(false);

  const [cardHeart, setCardHeart] = useState(() => {
    const storedCardHeart = localStorage.getItem(`cardHeart_${cardId}`);
    if (storedCardHeart !== null) {
      setCardHeartInitialized(true);
      return parseInt(storedCardHeart);
    }
    return card.Heart;
  });

  // Initialize cardHeart when the component mounts
  useEffect(() => {
    if (!cardHeartInitialized) {
      const storedCardHeart = localStorage.getItem(`cardHeart_${cardId}`);
      if (storedCardHeart !== null) {
        setCardHeart(parseInt(storedCardHeart));
      }
    }
  }, [cardId, cardHeartInitialized]);

  // Update local storage when state variables change
  useEffect(() => {
    localStorage.setItem("comment", comment);
  }, [comment]);

  useEffect(() => {
    localStorage.setItem("inputError", inputError.toString());
  }, [inputError]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
    // Update messageCount when comments change
    setMessageCount(comments.length);
  }, [comments]);

  useEffect(() => {
    localStorage.setItem("messageCount", messageCount.toString());
  }, [messageCount]);

  const increaseCount = () => {
    const updatedCardHeart = cardHeart + 1;
    const updatedCard = { ...card, Heart: updatedCardHeart };
    location.state.card = updatedCard;
    localStorage.setItem(`cardHeart_${cardId}`, updatedCardHeart.toString());

    // Cập nhật giá trị hiển thị
    setCardHeart(updatedCardHeart);
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
    setInputError(false);
  };

  const handlePostClick = () => {
    if (comment.trim() === "") {
      setInputError(true);
    } else {
      setComments([...comments, comment]);
      setComment("");
      setInputError(false);
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
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
                <img src={card.avatarImageUrl} alt="" />
              </div>
              <div className={styles["card-name"]}>
                <div className={styles.name}>{card.name}</div>
                <div className={styles.date}>{date} (day create)</div>
              </div>
            </div>

            <div className={styles["card-text"]}>{card.description}</div>
            <div className={styles["card-image-main"]}>
              <img src={card.pictureImageUrl} alt="" />
            </div>
            <div className={styles["icoin-detail"]}>
              <div className={styles["icoin-tym"]}>
                <img onClick={increaseCount} src={Heart} alt="tym" />
                {cardHeart}
              </div>
              <div className={styles["icoin-message"]}>
                <img src={Message} alt="cmt" />
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
                    inputError
                      ? `${styles.boxinput} ${styles.errorBoxInput}`
                      : styles.boxinput
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
