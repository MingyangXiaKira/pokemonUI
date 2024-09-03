import React, { useEffect } from "react";
import "./ash.scss";
import Button from "../Display/Button";
import Card from "../Surface/Card";
const Ash = ({ stage, number }) => {
  const descriptions = {
    1: "Experience",
    2: "Side Projects",
    3: "Contact",
  };
  const description = descriptions[number];

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
      // change description depends on number
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
                  <div
                    className={`pokeball ${number === 1 ? "jumping" : ""}`}
                    id="first"
                  ></div>
                  <div
                    className={`pokeball ${number === 2 ? "jumping" : ""}`}
                    id="second"
                  ></div>
                  <div
                    className={`pokeball ${number === 3 ? "jumping" : ""}`}
                    id="third"
                  ></div>
                  <div className="text">{description}</div>
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
