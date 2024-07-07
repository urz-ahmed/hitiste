"use client";
import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "@/components/ui/events/BackgroundImage";
import Slides from "@/components/ui/events/Slides";
import SlideInfo from "@/components/ui/events/SlideInfo";
import Controls from "@/components/ui/events/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0],
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased `}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    id:"1",
    img: "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "SN Bose Auditorium",
    description:
      ' The wait is finally over, and Team ISTE will ensure that it is worthwhile. Get ready for an amazing experience as the Indian Society for Technical Education - HIT Student Chapter is thrilled to extend an invitation to you for our First Annual Student Convention.',
    title: "Annual Convention",
  },
  {
    id:"2",
    img: "https://res.cloudinary.com/dqs4ncrqj/image/upload/v1716350127/p8y6nom6ez2zlfmdtlnh.jpg",
    location: "CS Department",
    description:
      ' The "Communicraft" workshop was meticulously crafted to elevate participants communication skills through a multifaceted approach under the guidance of an experienced HR from the DataSpace Academy.',
    title: "Communicraft",
  },
  {
    id:"3",
    img: "https://res.cloudinary.com/ds4lbluhe/image/upload/v1708694408/WhatsApp_Image_2024-02-23_at_18.47.38_034a1c5d_l5rf8s.jpg",
    location: "CS Department",
    description:
      'The cost-free "CodeVault" event, hosted by the Indian Society of Technical Education (ISTE) chapter of Haldia Institute of Technology, acts as an expansion of the preceding "Access Denied" Ethical Hacking workshop, which commenced on February , and lasted three days. The exam ranked the top 75 contenders out of 260. ',
    title: "CodeVault",
  },
  {
    id:"4",
    img: "https://res.cloudinary.com/ds4lbluhe/image/upload/v1708693635/IMG_20231101_185655_pwdjnf.jpg",
    title: "Access Denied",
    description:
      'The "Access Denied" Ethical Hacking workshop aimed to empower participants with skills in uncovering vulnerabilities, mastering penetration testing techniques, and understanding the ethical dimensions of hacking. Led by instructors from the Data Space Academy, this workshop provided expert guidance to ensure participants gained comprehensive knowledge and practical experience in cybersecurity practices',
    location: "CS Lab 2nd Floor",
  },
  {
    id:"5",
    img: "https://res.cloudinary.com/dqs4ncrqj/image/upload/v1716352303/sl6feobfbckblfymk3o2.jpg",
    title: "Quest for Enigma",
    description:
      'Quest for Enigma was an engaging technical quiz event aimed at evaluating participants proficiency across a wide range of technical and aptitude areas. The event not only provided a platform for networking but also served as an opportunity for participants to gain recognition, boost their confidence, and enhance their career prospects.',
    location: "Cryptography Lab",
  },
  {
    id:"6",
    img: "https://res.cloudinary.com/ds4lbluhe/image/upload/v1708695128/Screenshot_2024-02-23_190129_noofbb.png",
    title: "Bit N Bytes",
    description:
      '"BIT N BYTES" was the first event conducted by ISTE, designed for coding enthusiasts, consisting of two rounds: an initial online round on HackerRank, a platform for coding challenges and competitions',
    location: "Cryptography Lab",
  },
];

const initData = sliderData[0];
