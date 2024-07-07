"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { socials } from "@/consts/index";

import styles from "@/styles/customStyles";
import { footerVariants } from "@/utils/motion";
interface Social {
  url: string | undefined;
  name: string; // Ensure that name is always a string
  icon: string | undefined;
}
interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative bottom-0 py-8`}
  >
    <div />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="text-[24px] font-extrabold text-gray-400">ISTE@HIT</h4>
          <p className="text-[14px] font-normal text-white opacity-50">
            Made with ❤️ Copyright © {new Date().getFullYear()} -{" "}
            {new Date().getFullYear() + 1} ISTE@HIT
          </p>
          <div className="flex gap-4">
            {socials.map((social: Social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                key={social.name}
              >
                <span className="sr-only">{social.name}</span>
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-[24px] w-[24px] cursor-pointer object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
