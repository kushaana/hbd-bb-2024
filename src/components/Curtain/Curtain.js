import "./Curtain.css";
import Hero from "../Hero/Hero";
import Confetti from "../Confetti/Confetti";
import { useState } from "react";
import BB from "../../assets/images/BB.png"

function showTime() {
  var curtain = document.getElementById("curtain");
  curtain.className = "open";

  var scene = document.getElementById("scene");
  scene.className = "expand";

  var starter = document.getElementById("starter");
  starter.className = "fade-out";

  setTimeout(function () {
    starter.style.display = "none";
  }, 2000);

  setTimeout(() => {
    starter.style.zIndex = 0;
    scene.style.zIndex = 0;
    curtain.style.zIndex = 0;
  }, 3700);
}

export const Curtain = ({ mainSong }) => {
  const [confetti, setConfetti] = useState(false);

  return (
    <>
      <div
        id="starter"
        onClick={() => {
          mainSong.play();
          showTime();
          setTimeout(() => {
            setConfetti(true);
          }, 3500);
        }}
      >
        &lt;3
      </div>
      <div id="scene">
        <div id="curtain">
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
      <Hero />
      {confetti && <Confetti />}
      <img src={BB} height={"100%"} width={"100%"}/>
    </>
  );
};
