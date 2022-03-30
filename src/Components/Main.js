import React from "react";
import "./Main.css";
import "./Levels.css";
import Logo from "../images/logo-mastercraft.svg";
import Bookmark from "../images/icon-bookmark.svg";
import Levels from "./Levels";
function Main() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="info">
      <img src={Logo} alt="..." />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautiful & handcrafted stand to reduce neck and eye strain</p>
      <div className="buttons">
        <button
          className="back"
          onClick={() => {
            setShow(true);
          }}
        >
          Back this project
        </button>
        <button className="book">
          <img src={Bookmark} alt=".." />
          Bookmark
        </button>
      </div>
      {show && (
        <div className="Modal">
          <div
            className="close"
            onClick={() => {
              setShow(false);
            }}
          >
            X
          </div>
          <Levels
            name="Bamboo stand"
            pledge="$25"
            info=" You get an ergomatic stand made of natural bamboo. You've helped us launch our promotional campaign and you'll be added to a special backer member list"
            days="101"
          />
          <Levels
            name="Black Editon Stand"
            pledge="$75"
            info="You get a black special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included"
            days="64 "
          />

          <Levels
            name="Mahogany Special Edition"
            pledge="$200"
            info="You get two special edition mahogany stands, a backer t-shirt and a personal thank you. You'll be added to our backer member list. Shipping is included"
            days="0"
          />
        </div>
      )}
    </div>
  );
}

export default Main;
