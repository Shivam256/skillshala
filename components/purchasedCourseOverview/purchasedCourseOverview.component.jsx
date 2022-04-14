import React from "react";


const PurchasedCourseOverview = () => {
  return (
    <div className="w-full flex items-center justify-between p-2 h-36 sm:h-40 md:h-36 lg:h-48 rounded-md shadow-lg space-x-2 hover:shadow-xl">
      <img
        src="https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G"
        alt=""
        className="w-2/5 h-full object-cover rounded-md overflow-hidden"
      />
      <div className="w-3/5 h-full flex flex-col justify-between">
        <h2 className="text-xs lg:text-sm font-bold">
          Complete React Native Developer Course
        </h2>
        <h1 className="text-lg lg:text-xl ">32.State Management in React Native</h1>
        <div className="progress-bar">
          <p className="text-xs text-blue-500">60% (31/50) lectures</p>
          <div className="rounded-full w-full bg-gray-300 h-2 ">
            <div className="rounded-full w-2/5 h-full bg-blue-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasedCourseOverview;
