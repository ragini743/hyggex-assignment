import React from "react";
import QuizContainer from "./QuizContainer";

const Body = () => {
  return (
    <div className="mt-10 relative ">
      <div className="flex items-center justify-start flex-wrap">
        <div className="mr-2">
          <img src="./Frame1.png" alt="icon"></img>
        </div>
        <div className="mr-2">
          <img src="./Vector1.png" alt="vector-icon"></img>
        </div>
        <p className="mr-2">Flashcard</p>
        <div className="mr-2">
          <img src="./Vector1.png" alt="vector-icon"></img>
        </div>
        <p className="mr-2">Mathematics</p>
        <div className="mr-2">
          <img src="./Vector1.png" alt="vector-icon"></img>
        </div>
        <p className="text-blue-950 font-bold">Relation and Function</p>
      </div>
      <h1 className="font-extrabold text-lg my-10 text-blue-700">
        Relations and functions(Mathematics)
      </h1>
      <div className="mb-5 w-[80%] md:w-[60%] mx-auto">
        <ul className="flex mt-10 justify-evenly text-xs">
          <li>Study</li>
          <li>Quiz</li>
          <li>Text</li>
          <li>Game</li>
          <li>Others</li>
        </ul>
      </div>
      <QuizContainer />
    </div>
  );
};

export default Body;
