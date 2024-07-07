import React, { FC, useState } from "react";
import { motion } from "framer-motion";

import { exploreTeams } from "@/consts";
import { staggerContainer } from "@/utils/motion";
import ExploreCard from "@/components/ExploreCard";
import TypingText from "@/components/CustomTexts";

interface ExploreProps {}

function Explore() {
  const [active, setActive] = useState<string>("world-2");

  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12`} id="explore">
      <motion.div
        variants={staggerContainer(0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`lg:w-[80%] w-[100%] mx-auto flex flex-col`}
      >
        <TypingText title="௹ Explore the teams" textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreTeams.map((teams, index) => (
            <ExploreCard
              key={teams.id}
              {...teams}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Explore;
