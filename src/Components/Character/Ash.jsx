import React, { useEffect } from "react";
import "./ash.scss";
const Ash = ({ stage, number }) => {
  useEffect(() => {
    if (stage === "stage2") {
      const ashElement = document.querySelector(".ash");
      ashElement.classList.add("jump");

      setTimeout(() => {
        ashElement.classList.remove("jump");
      }, 300);
    }
  }, [stage]);
  useEffect(() => {
    if (stage === "stage2") {
    }
  }, [stage, number]);
  return (
    <div class="base">
      <div class="base" id="two">
        <div class="base" id="three">
          <div class="base" id="four">
            <div class="base" id="five">
              {stage === "stage2" && (
                <>
                  <div class="pokeball" id="first"></div>
                  <div class="pokeball" id="second"></div>
                  <div class="pokeball" id="third"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div class="ash"></div>
    </div>
  );
};

export default Ash;
