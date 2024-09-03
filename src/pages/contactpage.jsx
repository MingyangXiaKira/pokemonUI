import React from "react";
import "./contactpage.scss";
import Button from "../Components/Display/Button";
import { useNavigate } from "react-router-dom";
const Contactpage = () => {
  const navigate = useNavigate();
  return (
    <div className="contactContainer">
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

export default Contactpage;
