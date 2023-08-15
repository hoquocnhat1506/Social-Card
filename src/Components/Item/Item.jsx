import React from "react";
import "./Item.css";
import DogImage from "./img/Dog.svg";
import PenCil from "./img/Pencil.svg";
import Bin from "./img/Bin.svg";
import Baby from "./img/Baby.svg";
import Cat from "./img/CatF.svg";
import Name from "./img/Name.svg";
import Bottle from "./img/Bottle.svg";
import Elephent from "./img/Elephent.svg";

function Item() {
  return (
    <div className="list-item">
      <div className="content-main">
        <div className="main">
          <div className="image">
            <img src={Name} alt="" />
          </div>
          <div className="box-infor">
            <div className="information">
              <div className="fullname">Phu Nguyen</div>
              <div className="date">14/08/2023</div>
            </div>
            <div className="icoin">
              <img src={PenCil} alt="" />
              <img src={Bin} alt="" />
            </div>
          </div>
        </div>
        <div className="text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
        <img className="baby" src={Cat} alt="" />
      </div>
      <div className="content-main">
        <div className="main">
          <div className="image">
            <img src={DogImage} alt="" />
          </div>
          <div className="box-infor">
            <div className="information">
              <div className="fullname">Varen</div>
              <div className="date">14/08/2023</div>
            </div>
            <div className="icoin">
              <img src={PenCil} alt="" />
              <img src={Bin} alt="" />
            </div>
          </div>
        </div>
        <div className="text">
          Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các thông
          tin: Avatar, Name, Description, Image
        </div>
        <img className="baby" src={Baby} alt="" />
      </div>
      <div className="content-main">
        <div className="main">
          <div className="image">
            <img src={Bottle} alt="" />
          </div>
          <div className="box-infor">
            <div className="information">
              <div className="fullname">Mio</div>
              <div className="date">14/08/2023</div>
            </div>
            <div className="icoin">
              <img src={PenCil} alt="" />
              <img src={Bin} alt="" />
            </div>
          </div>
        </div>
        <div className="text">
          Next, you select one property. It doesn’t matter which one you choose,
          yet it’s best to pick one that seems totally unrelated to your
          challenge.
        </div>
        <img className="baby" src={Elephent} alt="" />
      </div>
    </div>
  );
}
export default Item;
