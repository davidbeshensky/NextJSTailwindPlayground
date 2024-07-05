"use client";
import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { LoremIpsum2 } from "@/app/components/LoremIpsum2";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-screen flex flex-col justify-center items-center relative snap-center perspective-500">
      <div ref={ref} className="w-72 h-96 relative max-h-90v ">
        <img src={`/${id}.jpg`} alt="A Vacation Photo" className="h-96 w-96" m-20 />
      </div>
      <LoremIpsum2 />
    </section>
  );
}

export default function FramrMotionTest5() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((image) => (
        <Image id={image} />
      ))}
      <motion.div
        className="bg-white-500 fixed left-0 right-0 height-5 bottom-28"
        style={{ scaleX }}
      />
    </div>
  );
}
