"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import TypingText from "@/components/CustomTexts";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
export function Guest() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <TypingText title="௹ Annual Convention Sponsors" textStyles={""} />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </motion.div>
  );
}

const testimonials = [
  {
    quote:
      'EEGRAB Services, with the motto "Transforming Business with Transparency, Management, and Simplicity," is a technology innovation company specializing in IoT and mobility solutions. It offers custom IoT solutions, partnering with HP ARUBA, CISCO, and AWS on complex projects.',
    name: "Technology Innovation Company",
    title: "EEGRAB Services",
    link:'https://eegrab.com/'
  },
  {
    quote:
      "A unit of Satts Cyber Technology Private Limited, offers over 100 courses in security and information systems, aligning with international trends. Located in Salt Lake City Sector 5, Kolkata, it is a leading institution in ethical hacking and cybersecurity training. ",
    name: "Training, Education & Development",
    title: "DataSpace Academy",
    link:"https://dataspaceacademy.com/"
  },
];
