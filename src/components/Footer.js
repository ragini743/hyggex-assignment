import React, { useState } from "react";
import { footerData } from "../utils/data";
import QuesFooter from "./QuesFooter";

const Footer = () => {
  const [showId, setShowId] = useState(0);

  const handleAnswer = (id) => {
    setShowId(id);
  };
  console.log("show", showId);

  return (
    <div className="md:w-[80%] pb-10 w-[80%] text-xs md:text-sm ">
      <h1 className="font-extrabold text-blue-950 text-[2rem] md:text-[2.5rem] py-4">
        FAQ
      </h1>
      <div className="mt-4">
        {footerData.map((value) => {
          return (
            <QuesFooter
              key={value.id}
              value={value}
              handleAnswer={handleAnswer}
              showId={showId}
              setShowId={setShowId}
              // isActive={value.id === showId ? "true" : false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
