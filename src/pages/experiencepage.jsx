import React from "react";
import "./experiencepage.scss";
import Button from "../Components/Display/Button";
import { useNavigate } from "react-router-dom";
const Experiencepage = () => {
  const navigate = useNavigate();
  return (
    <div className="expContainer">
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

export default Experiencepage;
