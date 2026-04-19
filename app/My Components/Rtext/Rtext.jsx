"use client";
import React from "react";
import RotatingText from "../RotatingText/RotatingText";

const Rtext = () => {
  return (
    <div className="flex text-4xl font-semibold items-center justify-center gap-2 md:py-[8vh] md:flex overflow-hidden">
      Creative
      <RotatingText
        texts={[
          "Coder!",
          "Innovator!",
          "Techie!",
          "Developer!",
        ]}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black w-max overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={1700}
      />
    </div>
  );
};

export default Rtext;
