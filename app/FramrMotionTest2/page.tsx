"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const FramrMotionTest2 = () => {
  const [x, setX] = useState(0);
  const [xPressed, setXpressed] = useState(false);
  const [y, setY] = useState(0);
  const [yPressed, setYpressed] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [rPressed, setRpressed] = useState(false);
  const handleXclick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (xPressed === false) {
      setX(300);
      setXpressed(true);
    } else {
      setX(0);
      setXpressed(false);
    }
  };
  const handleYclick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (yPressed === false) {
      setY(300);
      setYpressed(true);
    } else {
      setY(0);
      setYpressed(false);
    }
  };
  const handleRclick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (rPressed === false) {
        setRotate(360);
        setRpressed(true);
    } else {
        setRotate(rotate + 360);
        setRpressed(false)
    }
  };
  const handleChaos: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        const randomX = Math.random() * 500 - 250; // Generates a random value between -250 and 250
        const randomY = Math.random() * 500 - 250; // Generates a random value between -250 and 250
        const randomRotate = Math.random() * 720 - 360; // Generates a random value between -360 and 360
      
        setX(randomX);
        setY(randomY);
        setRotate(randomRotate);
      };



  return (
    <div className="flex justify-center items-center h-screen bg-orange-800">
      <div>
        <motion.div
          className="w-32 h-32 rounded-20 border rounded-lg"
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        >
        </motion.div>
      </div>
      <div className="absolute top-0 left-1/2 mt-6">
        <button onClick={handleXclick} className="border border-white px-2 py-1 m-1 hover:bg-orange-500 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-75">
          x
        </button>
        <button onClick={handleYclick} className="border border-white px-2 py-1 m-1 hover:bg-orange-500 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-75">
          y
        </button>
        <button onClick={handleRclick} className="border border-white px-2 py-1 m-1 hover:bg-orange-500 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-75">
          r
        </button>
        <button onClick={handleChaos} className="border border-whiter px-2 py-1 m-1 hover:bg-orange-500 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-75">
            press at your own risk
        </button>
      </div>
    </div>
  );
};

export default FramrMotionTest2;
