import React, { useEffect, useRef, useState } from "react";
import "./homepage.scss";
import Card from "../Components/Surface/Card";
import Button from "../Components/Display/Button";
import Ash from "../Components/Character/Ash";
import Input from "../Components/Input/Input";
const Homepage = () => {
  const [stage, setStage] = useState("stage1");
  const [showButton, setShowButton] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [number, setNumber] = useState(1);
  const buttonRef = useRef(null); // 创建一个按钮的引用
  const handleLeftClick = () => {
    setNumber((prevNumber) => (prevNumber > 1 ? prevNumber - 1 : 3));
  };

  const handleRightClick = () => {
    setNumber((prevNumber) => (prevNumber < 3 ? prevNumber + 1 : 1));
  };
  useEffect(() => {
    console.log("Number changed to:", number);
  }, [number]);
  useEffect(() => {
    if (stage === "stage2" && showButton2 === true) {
      console.log("ready");
      const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
          handleLeftClick();
        } else if (event.key === "ArrowRight") {
          handleRightClick();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      console.log("removed");
    };
  }, [stage, showButton2]);
  const handleButtonClick = () => {
    setStage("stage2");
  };
  const handleKeyDown = (event) => {
    if (stage === "stage1" && event.key === "Enter") {
      handleButtonClick();
    } else if (stage === "stage2" && event.key === "Enter") {
    }
  };

  useEffect(() => {
    if (showButton && buttonRef.current) {
      buttonRef.current.focus(); // 尝试聚焦按钮
    }
  }, [showButton]);

  useEffect(() => {
    if (stage === "stage1") {
      const timer = setTimeout(() => {
        setShowButton(true); // 设置 showButton 为 true
      }, 2500); // 2.5 秒后显示按钮

      return () => clearTimeout(timer); // 清理定时器
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "stage2") {
      const timer = setTimeout(() => {
        setShowButton2(true); // 设置 showButton 为 true
      }, 500);

      return () => clearTimeout(timer); // 清理定时器
    }
  }, [stage]);
  return (
    <div className="homeContainer" onKeyDown={handleKeyDown}>
      <div className="screen"></div>
      <div className="ab">
        <img src="./ab.png" />
      </div>
      <div className="direction">
        <img src="./direction.png" />
      </div>
      <div class="back">
        <Ash stage={stage} number={number} />
        <div className="cardContainer">
          {stage === "stage1" ? (
            <Card key="stage1">
              <div className="spacer">
                <Input
                  content={"Hello, my name is Ming, a Full-Stack Web Engineer."}
                />
                <div className="buttonContainer">
                  {showButton && (
                    <Button
                      reference={buttonRef}
                      content={"Continue"}
                      onClick={handleButtonClick}
                    />
                  )}
                </div>
              </div>
            </Card>
          ) : (
            <Card key="stage2">
              <div className="spacer">
                <Input content={"Choose wisely!..."} />
                {showButton2 && (
                  <>
                    <Button
                      content={"<-"}
                      style={{ right: "80px" }}
                      onClick={handleLeftClick}
                    />
                    <Button content={"->"} onClick={handleRightClick} />
                  </>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
