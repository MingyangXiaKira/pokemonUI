import React, { useEffect, useState } from "react";
import "./projectpage.scss";
import Button from "../Components/Display/Button";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Surface/Card";
import StackIcon from "tech-stack-icons";
{
  /* <StackIcon name="jquery" />
<StackIcon name="reactjs" />
<StackIcon name="nodejs" />
<StackIcon name="aws" />
<StackIcon name="postgresql" />
<StackIcon name="tailwindcss" />
<StackIcon name="php" />
<StackIcon name="html5" />
<StackIcon name="mongodb" />
<StackIcon name="redux" /> 
<StackIcon name="spring" />*/
}
const metaData = [
  {
    id: 1,
    img: "./stock.png",
    description: [
      "Built using a modern full-stack approach with React, Node.js, and PostgreSQL.",
      "Deployed on AWS using EC2, S3 Bucket, and Amplify for high availability and scalability.",
      "Real-time inventory tracking and warehouse management features.",
      "Robust data visualization for tracking stock levels, purchase histories, and sales trends.",
      "Optimized for performance, ensuring smooth user experience even with large datasets.",
    ],
    title:
      "MingStock: Full-stack warehouse management dashboard deployed with AWS EC2, S3 Bucket and Amplify",
    stack: ["reactjs", "nodejs", "postgresql", "aws"],
    gif: "./stock.gif",
    link: "https://master.d3czdz443lewbq.amplifyapp.com/dashboard",
  },
  {
    id: 2,
    img: "./reactplayground.png",
    description: [
      "A modular platform for storing React components and utility code snippets.",
      "Showcases the latest React 19 features and optimizations for building high-performance applications.",
      "Styled with TailwindCSS for rapid UI development and clean design.",
      "Provides a centralized space for reusable components, enhancing productivity and code maintainability.",
      "Includes real-time demos and visualizations of React components in action.",
    ],
    title:
      "ReactPlayground: A place to store the React components and utility code snippets in a modular way",
    stack: ["reactjs", "tailwindcss", "html5"],
    gif: "./react.gif",
    link: "https://react-playground-ig72gmwzt-mings-projects-82e9d123.vercel.app/",
  },
  {
    id: 3,
    img: "./merncommerce.png",
    description: [
      "Full-fledged E-commerce platform combining React and Redux Toolkit for dynamic front-end and state management.",
      "Integrated with SpringBoot for a reliable and scalable backend API.",
      "Utilizes MongoDB for flexible, schema-less database management.",
      "Features user authentication, secure checkout, and a seamless product browsing experience.",
      "Implements advanced cart and order management functionalities.",
    ],
    title:
      "An E-commerce website based on React, Redux Toolkit, SpringBoot, and MongoDB",
    stack: ["reactjs", "redux", "spring", "mongodb", "tailwindcss", "html5"],
    gif: "./commerce.gif",
    link: "https://mern-booking-n2kh-1lu2.onrender.com/",
  },
  {
    id: 4,
    img: "./wandering.png",
    description: [
      "Developed using HTML, jQuery, and PHP to create a fully functional forum with over 2,000 active users at peak times.",
      "Designed for community engagement, allowing users to post, comment, and interact in real time.",
      "Micro-services backend with user management, post moderation, and notification systems.",
      "Highly interactive with AJAX-based real-time updates, ensuring a dynamic user experience.",
      "Demonstrates stability and reliability, as the forum is still active today.",
    ],
    title:
      "WanderingGotham: An online forum application with more than 2,000 online users",
    stack: ["html5", "jquery", "php", "postgresql"],
    gif: "./wander.gif",
    link: "https://cyber.dota2.me/",
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
      setIsGifPlaying(false);
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
  const handleNav = () => {
    const currentProject = metaData[slideIndex];
    if (currentProject && currentProject.link) {
      window.open(currentProject.link, "_blank");
    }
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
                        <div className="shortDesc"> {item.title}</div>
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
                        <Button
                          content={"View Web"}
                          style={{ left: "-10%", bottom: "10px" }}
                          onClick={handleNav}
                        />
                        <h3>Technical Stacks:</h3>
                        <div className="iconContainer">
                          {item.stack.map((item, index) => {
                            console.log(item);
                            return (
                              <StackIcon
                                style={{ width: "40px", height: "40px" }}
                                name={item}
                              />
                            );
                          })}
                        </div>
                      </Card>
                    </div>
                    <div className="titleContainer">
                      <Card style={{ width: "100%", height: "90%" }}>
                        <div className="discriptionContainer">
                          {item.description.map((item, index) => {
                            return (
                              <div className="descriptionItem">{item}</div>
                            );
                          })}
                        </div>
                      </Card>
                    </div>
                  </div>
                )}
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
