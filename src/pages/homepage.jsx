import React, { useState } from "react";
import "./homepage.scss";
import Card from "../Components/Surface/Card";
import Button from "../Components/Display/Button";
import Ash from "../Components/Character/Ash";
const Homepage = () => {
  const [stage, setStage] = useState("stage1");
  const handleButtonClick = () => {
    setStage("stage2");
  };
  console.log(stage);
  return (
    <div className="homeContainer">
      <div class="back">
        <Ash />
        <div className="cardContainer">
          <Card>
            <div className="spacer">
              <div class="typing-animation">
                Hello, my name is Ming, a Full-Stack Web Engineer.
              </div>
              <div className="buttonContainer">
                <Button content={"Enter"} onClick={handleButtonClick} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
