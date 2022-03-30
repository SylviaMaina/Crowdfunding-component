import React from "react";
import "./About.css";
import Levels from "./Levels";

function About() {
  return (
    <div>
      <div className="about">
        <h3>About this project</h3>
        <p>
          The mastercraft bamboo monitor riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand. featuring artisan craftmanship, the
          simplicity of design creates extra desk space below your computer to
          allow notepads,pens and USB sticks to be stored under the stand.
        </p>
        <div>
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
      </div>
    </div>
  );
}

export default About;
