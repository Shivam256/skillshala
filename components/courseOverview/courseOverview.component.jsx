import React from "react";
import {BsHeart } from "react-icons/bs";
import CustomRating from "../rating/rating.component";

const CourseOverview = () => {
  return (
    <div className="w-full flex flex-col justify-start h-72 sm:h-72 md:h-72 lg:h-72 rounded-md shadow-lg space-x-2 overflow-hidden hover:shadow-xl hover:scale-105 transition ease-in-out">
      <img
        src="https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G"
        alt=""
        className="w-full h-3/5 object-cover"
      />
      <div className="w-full h-2/5 p-2">
        <h2 className="truncate">Complete flutter developer course</h2>
        <p className="text-xs">by Jack Sparrow</p>
        <CustomRating initialRating={3} readonly />
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold">&#8377; 500/-</h1>
          <BsHeart className="mr-2" color="#FF4081" />
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
