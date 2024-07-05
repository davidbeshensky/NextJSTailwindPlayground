"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FramrMotionTest3() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-700">
      <div
        className="w-1/3 h-25 bg-white bg-opacity-40 rounded-full cursor-pointer flex justify-start m-3 py-3 px-20"
        style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
        onClick={toggleSwitch}
      >
        <motion.div
          className="w-20 h-20 bg-white rounded-full"
          layout
          transition={spring}
        />
      </div>
      <div className="flex flex-row">
        <div
          className="w-40 h-25 bg-white bg-opacity-40 cursor-pointer flex justify-start m-3 p-3"
          style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
          onClick={toggleSwitch}
        >
          <motion.div
            className="w-20 h-20 bg-white"
            layout
            transition={spring}
          />
        </div>
        <div
          className="w-40 h-25 bg-white bg-opacity-40 rounded cursor-pointer flex justify-start m-3 p-3"
          style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
          onClick={toggleSwitch}
        >
          <motion.div
            className="w-20 h-20 bg-white rounded"
            layout
            transition={spring}
          />
        </div>
        <div
          className="w-40 h-25 bg-white bg-opacity-40 rounded-lg cursor-pointer flex justify-start m-3 p-3"
          style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
          onClick={toggleSwitch}
        >
          <motion.div
            className="w-20 h-20 bg-white rounded-lg"
            layout
            transition={spring}
          />
        </div>
        <div
          className="w-40 h-25 bg-white bg-opacity-40 rounded-full cursor-pointer flex justify-start m-3 p-3"
          style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
          onClick={toggleSwitch}
        >
          <motion.div
            className="w-20 h-20 bg-white rounded-full"
            layout
            transition={spring}
          />
        </div>
      </div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

// width: 80px;
// height: 80px;
// background-color: white;
// border-radius: 40px;
