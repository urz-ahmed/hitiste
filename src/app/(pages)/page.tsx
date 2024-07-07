"use client";
import {
  HeroSection,
  About,
  JoinUs,
  RecentEvent,
  Explore,
  Message,
  Guest
} from "@/components/ui/home";

export default function Hero() {
  return (
    <div className="mt-12 md:mt-2 h-full">
      <div>
        <HeroSection />
      </div>
      <div className="relative mt-[500px]">
        <About />
        <div className="gradient-03 z-0" />
        <JoinUs />
      </div>
      <div className="relative">
        <Guest/>
        <RecentEvent />
        <div className="gradient-04 z-0" />
      </div>
      <div className="relative">
        <Explore />
        <div className="gradient-04 z-0" />
        <Message />
      </div>
    </div>
  );
}