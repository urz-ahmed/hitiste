import React, { FC } from "react";
import { motion } from "framer-motion";
import TypingText from "@/components/CustomTexts";
import { fadeIn, staggerContainer } from "@/utils/motion";

interface AboutProps {}

export default function About() {
  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10 container`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer(0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`lg:w-[80%] w-[100%] mx-auto flex justify-center items-center flex-col`}
      >
        <TypingText title="௹ About ISTE" textStyles="text-center" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-secondary-white my-[16px] text-center text-[16px] font-light sm:text-[24px]"
        >
          The ISTE Student Chapter at Haldia Institute of Technology is your
          gateway to a world of innovation in educational technology. As a part
          of the Indian Society for Technical Education (ISTE), our mission is
          to empower students with the tools and knowledge they need to excel in
          a digital age. We provide a dynamic platform for students to engage in
          cutting-edge research, participate in workshops, and collaborate on
          projects that push the boundaries of technology and education.
        </motion.p>
      </motion.div>
    </section>
  );
}
