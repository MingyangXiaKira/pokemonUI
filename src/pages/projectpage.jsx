import React from "react";
import "./projectpage.scss";
import Button from "../Components/Display/Button";
import { useNavigate } from "react-router-dom";
const Projectpage = () => {
  const navigate = useNavigate();
  return (
    <div className="projectContainer">
      <div className="screen">
        <Button
          onClick={() => {
            navigate("../", { state: { stage: "stage2" } });
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Projectpage;
