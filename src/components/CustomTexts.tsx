import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";
interface TypingTextProps {
  title: string;
  textStyles: string;
}
export default function TypingText({ title, textStyles }: TypingTextProps) {
  return (
    <motion.p
      variants={textContainer}
      className={`text-3xl font-mono font-bold text-white pointer-events-none ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}
