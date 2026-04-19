"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiLeetcode, SiCodechef, SiCodeforces, SiHackerrank, SiGeeksforgeeks, SiGithub } from "react-icons/si";
import { twMerge } from "tailwind-merge";

export const DivOrigami = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-6 bg-[#1a1a1a] px-4 py-8 md:flex-row">
      <div className="flex flex-col items-center gap-4">
        <LogoRolodex
          items={[
            <LogoItem key={1} className="bg-orange-500 text-white">
              <SiLeetCode />
            </LogoItem>,
            <LogoItem key={2} className="bg-[#5B4638] text-white">
              <SiCodeChef />
            </LogoItem>,
            <LogoItem key={3} className="bg-[#1F8ACB] text-white">
              <SiCodeForces />
            </LogoItem>,
            <LogoItem key={5} className="bg-[#2F8D46] text-white">
              <SiGeeksforGeeks />
            </LogoItem>,
            <LogoItem key={6} className="bg-[#181717] text-white">
              <SiGitHub />
            </LogoItem>,
          ]}
        />
        <p className="text-xs md:text-sm text-gray-400 text-center max-w-xs">
          Active on multiple competitive programming platforms
        </p>
      </div>
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      {/* Text overlay inside the card */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <p className="text-xs text-gray-400 text-center px-2 font-medium">
          DSA Platforms
        </p>
      </div>

      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
