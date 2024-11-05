// import React from "react";
import { useState } from "react";

const HuseState = () => {
  const [counter, setCounter] = useState(0);
  const handleaddCounter = () => {
    console.log("clicked ", Math.random());
    setCounter(counter + 1);
  };
  const handlesubCounter = () => {
    console.log("clicked ", Math.random());
    setCounter(counter - 1);
  };
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col">
      <h1 className=" text-center text-3xl font-bold">
        Welcome to useState hook..
      </h1>
      <div className="text-2xl mt-5 items-center justify-center">
        <h1 className=" bg-green-700  px-3 py-2 text-yellow-50 first-letter:capitalize rounded-xl mb-4">
          counter : {counter}
        </h1>
        <div className="flex gap-5 font-semibold">
          <button
            onClick={() => handleaddCounter()}
            className=" bg-slate-950  px-3 py-2 text-yellow-50 first-letter:capitalize rounded-xl"
          >
            add
          </button>
          <button
            onClick={() => handlesubCounter()}
            className=" bg-slate-950  px-3 py-2 text-yellow-50 first-letter:capitalize rounded-xl"
          >
            sub
          </button>
        </div>
      </div>
    </div>
  );
};

export default HuseState;
