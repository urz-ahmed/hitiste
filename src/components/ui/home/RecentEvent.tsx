import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaMapMarker } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { staggerContainer } from "@/utils/motion";
import TypingText from "@/components/CustomTexts";

interface EventData {
  id: number;
  imageUrl?: string;
  eventName: string;
  eventTiming: string;
  eventLocation: string;
}

const eventData: EventData[] = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dqs4ncrqj/image/upload/v1716350127/p8y6nom6ez2zlfmdtlnh.jpg",
    eventName: "Communicraft",
    eventTiming: "17 April 2024",
    eventLocation: "CS Deppt",
  },
  {
    id: 2,
    eventName: "CodeVault",
    eventTiming: "February 21st, 2024",
    eventLocation: "Cryptography Lab HIT",
  },
  // Add more event objects here
];

export default function RecentEvent() {
  const topEvent: EventData = eventData[0];
  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
      <motion.div
        variants={staggerContainer(0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
      >
        <TypingText title="௹ Recent Events" textStyles="text-center" />
        <div className="flex flex-wrap">
          {/* Left Div */}
          <div className="w-full sm:w-1/2 p-4">
            <div className="relative">
              <img
                src={topEvent.imageUrl}
                alt="Event"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-[rgba(0,0,0,0.5)] text-white rounded-md">
                <div className="font-bold">{topEvent.eventName}</div>
                <div className="flex items-center space-x-3">
                  <IoCalendarOutline />
                  <span>{topEvent.eventTiming}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarker />
                  <span>{topEvent.eventLocation}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Div */}
          <div className="w-full sm:w-1/2 p-4 ">
            {eventData.slice(0).map((event) => (
              <div
                key={event.id}
                className="mb-4 border-l-4 border-lime-100 mr-4"
              >
                <div className="ml-4 text-gray-200">
                  <div className="font-bold">{event.eventName}</div>
                  <div className="flex items-center space-x-3">
                    <IoCalendarOutline />
                    <span>{event.eventTiming}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaMapMarker />
                    <span>{event.eventLocation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
