import React from "react";
import customStyles from "@/styles/customStyles";

interface JoinStepsProps {
  number: string;
  text: string;
}
export default function JoinSteps({ number, text }: JoinStepsProps) {
  return (
    <div className={`${customStyles.flexCenter} flex-row`}>
      <div
        className={`${customStyles.flexCenter} h-[60px] w-[60px] claymorphism hover:bg-slate-800`}
      >
        <p className="text-[16px] font-bold text-gray-400 pointer-events-none">
          {number}
        </p>
      </div>
      <p className="ml-[30px] flex-1 text-[18px] leading-[24px] text-[#B0B0B0]">
        {text}
      </p>
    </div>
  );
}
