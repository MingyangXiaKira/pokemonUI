import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import "./homepage.scss";
import Card from "../Components/Surface/Card";
import Button from "../Components/Display/Button";
import Ash from "../Components/Character/Ash";
import Input from "../Components/Input/Input";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const location = useLocation();

  const [stage, setStage] = useState(location.state?.stage || "stage1");

  const [showButton, setShowButton] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [number, setNumber] = useState(1);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const handleLeftClick = () => {
    setNumber((prevNumber) => (prevNumber > 1 ? prevNumber - 1 : 3));
  };

  const handleRightClick = () => {
    setNumber((prevNumber) => (prevNumber < 3 ? prevNumber + 1 : 1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (stage === "stage1" && event.key === "Enter") {
        handleButtonClick();
      } else if (stage === "stage2" && event.key === "Enter") {
        navigateBasedOnNumber();
      } else if (stage === "stage2") {
        if (event.key === "ArrowLeft") {
          handleLeftClick();
        } else if (event.key === "ArrowRight") {
          handleRightClick();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [stage, number, showButton2]);

  const handleButtonClick = () => {
    setStage("stage2");
  };

  const navigateBasedOnNumber = () => {
    if (number === 1) {
      navigate("/experience");
    } else if (number === 2) {
      navigate("/project");
    } else if (number === 3) {
      navigate("/contact");
    }
  };

  useEffect(() => {
    if (showButton && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [showButton]);

  useEffect(() => {
    if (stage === "stage1") {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "stage2") {
      const timer = setTimeout(() => {
        setShowButton2(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div className="homeContainer">
      <div className="screen"></div>
      <div className="back">
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
                      style={{ right: "165px" }}
                      onClick={handleLeftClick}
                    />
                    <Button
                      content={"->"}
                      style={{ right: "100px" }}
                      onClick={handleRightClick}
                    />
                    <Button
                      content={"Continue"}
                      style={{ right: "-15px" }}
                      onClick={navigateBasedOnNumber}
                    />
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
