import React from "react";

import PurchasedCourseOverview from "../../components/purchasedCourseOverview/purchasedCourseOverview.component";
import CourseOverview from "../../components/courseOverview/courseOverview.component";

const Courses = () => {
  return (
    <div className="max-w-7xl flex-col mx-auto px-5 md:px-3 lg:px-2 py-5">
      <h1 className="text-3xl mb-2">Continue learning</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 w-full gap-5 ">
        <PurchasedCourseOverview />
        <PurchasedCourseOverview />
        <PurchasedCourseOverview />
      </div>
      <hr className="w-full mx-auto border mt-5 border-gray-200" />
      <div className="flex items-center space-x-5 mt-5">
        <div className="rounded-full bg-blue-500 text-white px-8 py-1">PAID</div>
        <div className="rounded-full text-blue-500 border-2 border-blue-500 px-8 py-1">FREE</div>

      </div>
      <h1 className="text-3xl mb-2 mt-3"> Recommended for you</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 w-full gap-5 ">
        <CourseOverview />
        <CourseOverview />
        <CourseOverview />
        <CourseOverview />
      </div>
      <hr className="w-full mx-auto border mt-5 border-gray-200" />
      <h1 className="text-3xl mb-2 mt-10"> Popular courses</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 w-full gap-5 ">
        <CourseOverview />
        <CourseOverview />
        <CourseOverview />
        <CourseOverview />
      </div>
    </div>
  );
};

export default Courses;
