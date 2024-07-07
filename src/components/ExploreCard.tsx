import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

export default function ExploreCard({
  id,
  imgUrl,
  title,
  description,
  index,
  active,
  handleClick,
}: ExploreCardProps) {
  const cardVariants: Variants = fadeIn("right", "spring", index * 0.5, 0.75);

  return (
    <motion.div
      variants={cardVariants}
      className={`relative ${
        active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"
      } ease-out-flex flex h-[700px] min-w-[170px] cursor-pointer items-center justify-center transition-[flex] duration-&lsqb;0.7s&rsqb;`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="teams-images"
        className="absolute h-full w-full rounded-[24px] object-cover"
      />
      {active !== id ? (
        <h3 className="absolute z-0 bg-[rgba(0,0,0,0.5)] text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 flex w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.5)] p-8">
          <p className="text-[16px] font-normal leading-[20.16px] text-white">
            {description}
          </p>
          <h2 className="mt-[24px] text-[24px] font-semibold text-white sm:text-[32px]">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
}
