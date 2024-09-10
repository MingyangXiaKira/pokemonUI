import React, { useEffect, useState } from "react";
import "./projectpage.scss";
import Button from "../Components/Display/Button";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Surface/Card";

const metaData = [
  {
    id: 1,
    img: "./stock.png",
    description: "desc1",
    title: "",
    stack: ["react", "node.js", ""],
    gif: "./stock.gif",
  },
  {
    id: 2,
    img: "./reactplayground.png",
    description: "desc2",
    title: "ReactPlayground",
    stack: ["a", "b", "c"],
    gif: "./react.gif",
  },
  {
    id: 3,
    img: "./merncommerce.png",
    description: "desc3",
    title: "MERN-Commerce",
    stack: ["a", "b", "c"],
    gif: "./commerce.gif",
  },
  {
    id: 4,
    img: "./wandering.png",
    description: "desc4",
    title: "WanderingGotham",
    stack: ["a", "b", "c"],
    gif: "./wander.gif",
  },
];
const Projectpage = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isGifPlaying, setIsGifPlaying] = useState(true);
  useEffect(() => {
    setIsGifPlaying(true);
    const gifDuration = 5000;
    const timer = setTimeout(() => {
      // setIsGifPlaying(false);
    }, gifDuration);
    return () => clearTimeout(timer);
  }, [slideIndex]);
  const handleNext = () => {
    setSlideIndex((current) => {
      return current === metaData.length - 1 ? 0 : current + 1;
    });
  };
  const handlePrev = () => {
    setSlideIndex((current) => {
      return current === 0 ? metaData.length - 1 : current - 1;
    });
  };
  const handleBack = () => {
    navigate("../", { state: { stage: "stage2" } });
  };
  const dots = new Array(metaData.length).fill(0);
  dots[slideIndex] = 1;
  const handleKeydown = (event) => {
    if (event.key === "ArrowLeft") {
      handlePrev();
    } else if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "Backspace") {
      handleBack();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
  return (
    <div className="projectContainer">
      <div className="screen">
        <div className="dotsContainer">
          {dots.map((item, index) => {
            return (
              <div key={index} className={`dot ${item ? "active" : ""}`}></div>
            );
          })}
        </div>

        <div className="buttonContainer">
          <Card style={{ padding: "35px 120px" }}>
            <Button
              content={"<"}
              style={{ right: "165px", bottom: "10px" }}
              onClick={handlePrev}
            />
            <Button
              content={">"}
              style={{ right: "100px", bottom: "10px" }}
              onClick={handleNext}
            />
            <Button
              content={"Back"}
              style={{ right: "15px", bottom: "10px" }}
              onClick={handleBack}
            />
          </Card>
        </div>

        {metaData.map((item, index) => {
          if (index === slideIndex) {
            return (
              <div className="sliderContainer" key={index}>
                <div
                  className="backgroundImg"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>

                {isGifPlaying ? (
                  <div className="slideContainer">
                    <div className="imgContainer active">
                      <img className={`imgBlock`} src={item.gif} />
                    </div>
                    <div className="descContainer active"></div>
                    <div className="titleContainer active">
                      <Card style={{ width: "100%", height: "90%" }}>
                        Title
                      </Card>
                    </div>
                  </div>
                ) : (
                  <div className="slideContainer">
                    <div className="imgContainer">
                      <img className={`imgBlock`} src={item.img} />
                    </div>
                    <div className="descContainer">
                      <Card style={{ width: "100%", height: "90%" }}>
                        Title
                      </Card>
                    </div>
                    <div className="titleContainer">
                      <Card style={{ width: "100%", height: "90%" }}>
                        Title
                      </Card>
                    </div>
                  </div>
                )}
                {/* <div className="ImgContainer">
                  <div className="Image">
                    <img
                      className={`imgBlock ${isGifPlaying ? "active" : ""}`}
                      src={isGifPlaying ? "./download.gif" : "./stock.png"}
                    />
                  </div>
                </div>
                <div className="TextContainer">
                  <div className="Title">{item.title}</div>
                  <div className="Descriotion">{item.description}</div>
                  <div className="Stacks">{item.stack}</div>
                </div> */}
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </div>
    </div>
  );
};

export default Projectpage;
