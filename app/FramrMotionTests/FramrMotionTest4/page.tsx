"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { LoremIpsum } from "../../components/LoremIpsum";

const FramrMotionTest4 = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-slate-800">
      <motion.div
        className="fixed top-0 left-0 right-0 h-5 bg-red-500 origin-left"
        style={{ scaleX }}
      />
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="blue"
        className="fixed top-40 left-40"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          fill="red"
          stroke="white"
          opacity="0.3"
          stroke-width="10%"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          stroke="white"
          stroke-width="10%"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-xl">Scroll Animations Demo</h1>
        <LoremIpsum />
      </div>
      </div>
  );
};

export default FramrMotionTest4;

//flex justify-center items-center flex-col
