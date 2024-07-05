"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const FramrMotionTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="text-red-900 bg-red-900 h-screen flex items-center justify-center">
          <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className="border-1 m-2 pt-1 pb-1 px-3 bg-white rounded-lg flex flex-row w-40"
              >
                <span className="mr-auto text-base">Menu</span>
                <motion.div
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0.55 }}
                >
                  <svg width="15" height="15" viewBox="0 0 20 20" className="fill-red-900">
                    <path d="M0 7 L 20 7 L 10 16" />
                  </svg>
                </motion.div>
              </motion.button>
            <motion.ul
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
              className="border-1 bg-white w-40 m-2 pt-1 pb-1 px-2 text-sm"
            >
              <motion.li variants={itemVariants} className="py-1 px-3">Item 1 </motion.li>
              <motion.li variants={itemVariants} className="py-1 px-3">Item 2 </motion.li>
              <motion.li variants={itemVariants} className="py-1 px-3">Item 3 </motion.li>
              <motion.li variants={itemVariants} className="py-1 px-3">Item 4 </motion.li>
              <motion.li variants={itemVariants} className="py-1 px-3">Item 5 </motion.li>
            </motion.ul>
          </motion.nav>
      </div>
  );
};

export default FramrMotionTest;
