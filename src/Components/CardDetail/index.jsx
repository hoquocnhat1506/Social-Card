import React from "react";
// import Elephent from "./img/Elephent.svg";

function CardDetail() {
  return (
    <div className="card">
      <div className="card-title">
        <div>SOCIAL CARD DETAIL</div>
      </div>
      <div className="card-image">
        <div className="image">{/* <img src={Elephent} alt="" /> */}</div>
        <div className="card-name">
          <div className="name">Binance</div>
          <div className="date">22/04/2021 (day create)</div>
        </div>
        <div className="card-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more- or-less normal distribution
          of letters, as opposed to using 'Content here, content here', making
          it look like readable English. Many desktop publishing packages and
          web page editors now use Lorem Ipsum as their default model text, and
          a search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
        <div className="card-image-main">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
