"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
type Props = {};

const Completionist = () => (
  <span className="text-green-500 font-bold">Membership form is now open!</span>
);
const MembershipPage = (props: Props) => {
    const openDate = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30 days from now
  // The component to display when the countdown is complete
//@ts-ignore
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completion state
      return <Completionist />;
    } else {
      // Render a vibrant, colorful countdown
      return (
        <span className="font-bold">
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };
  return (
    <div className="flex justify-center items-center my-24 text-black ">
      <div className="w-full max-w-lg shadow-lg rounded-lg p-8  shadow-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          ISTE Membership Form
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="department"
            >
              Department
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="department"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Year
              <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center text-black">
              <input
                type="radio"
                id="year1"
                name="year"
                value="1st"
                className="mr-2 leading-tight"
                required
              />
              <label htmlFor="year1" className="mr-4">
                1st
              </label>
              <input
                type="radio"
                id="year2"
                name="year"
                value="2nd"
                className="mr-2 leading-tight"
                required
              />
              <label htmlFor="year2">2nd</label>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="interest"
            >
              Which Field Interests you the Most?
              <span className="text-red-500">*</span>
            </label>
            <select
              defaultValue={""}
              id="interest"
              className="block appearance-none w-full bg-white border text-black  border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="Public Relation">Public Relation</option>
              <option value="Technical">Technical</option>
              <option value="Video Editor">Video Editor</option>
              <option value="Graphics Designing">Graphics Designing</option>
              <option value="Content Writer">Content Writer</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="expectations"
            >
              What do you expect from your membership in ISTE?
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="expectations"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="reforms"
            >
              As an ISTE member, what reforms would you propose to enhance the
              effectiveness and impact of the organization?
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="reforms"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={true}
              className="bg-gray-500 hover:bg-gray-700 text-sm   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              The membership form will open in{" "}
              <Countdown date={openDate} renderer={renderer} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipPage;
