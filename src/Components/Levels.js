import React from "react";
import "./Levels.css";
import Check from "../images/icon-check.svg";

function Levels({ name, pledge, info, days }) {
  const [show, setShow] = React.useState(false);
  const [price, setPrice] = React.useState(25);
  const [thanks, setThanks] = React.useState(false);
  const handleChange = (e) => {
    setPrice((prevPrice) => e.target.value);
  };

  return (
    <div className="levels">
      <div className="doja">
        <h3>{name}</h3>
        <p className="pledge">Pledge {pledge} or more</p>
      </div>
      <p>{info}</p>
      <div className="action">
        <p>
          <span>{days} </span>left
        </p>
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Select reward
        </button>
      </div>
      {show && (
        <div className="pledge">
          <div className="close" onClick={() => setShow(false)}>
            X
          </div>
          <h3>Enter your pledge</h3>
          <form>
            <input
              type="text"
              placeholder="$25"
              value={price}
              onChange={handleChange}
            />
          </form>
          <button onClick={() => setThanks(true)}>Continue</button>
          {thanks && (
            <div className="thanks">
              <img src={Check} alt="..." />
              <h2>Thanks for Your Support!</h2>
              <p>
                Your pledge brings us one step closer to sharing mastercraft
                bamboo monitor rissr worldwide. You will get an email once our
                campaign is completed
              </p>
              <button onClick={() => setThanks(false)}>Got it!</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Levels;
