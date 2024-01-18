import React from "react";
import { useState } from "react";

const QuesFooter = ({ value, handleAnswer, showId, setShowId }) => {
  console.log("value");

  const [isActive, setIsActive] = useState(value.id === showId);
  console.log("isValue", isActive);
  const handleToggle = () => {
    setIsActive(!isActive);
    handleAnswer(value.id);
  };

  return (
    <div
      className="border-gray-400 border-2 flex 
    justify-between items-center px-2 py-1 rounded-lg mb-4"
    >
      <div>
        <p>{value.ques}</p>
        {isActive ? <p>{value.ans}</p> : null}
      </div>

      <div className="w-[5%]">
        <img
          src={isActive ? "./collapse.png" : "./expand.png"}
          alt=""
          className="w-full"
          onClick={() => {
            handleToggle();
            setIsActive(!isActive);
          }}
        ></img>
      </div>
    </div>
  );
};

export default QuesFooter;
