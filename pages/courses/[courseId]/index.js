import { Button } from "@mui/material";
import React from "react";
import CustomRating from "../../../components/rating/rating.component";

const Course = () => {
  return (
    <div>
      <div className="w-full h-fit lg:h-96 bg-blue-500 z-0 absolute top-16 overflow-visible">
        <div className=" max-w-7xl mx-auto mt-12 flex flex-wrap px-10 md:px-7 lg:px-3 space-x-0">
          <div className="w-full lg:w-2/5 bg-white shadow-lg rounded-md h-fit p-2 flex flex-col space-y-3">
            <img
              src="https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G"
              alt=""
            />
            <div className="px-2 flex flex-col space-y-2">
              <h1 className="text-4xl font-bold text-blue-500">
                &#8377; 500/-
              </h1>
              <div className="my-10">
                <p className="text-lg ">55 lectures</p>
                <p className="text-lg ">40 hours content</p>
                <p className="text-lg ">Life time access</p>
                <p className="text-lg ">12 study groups</p>
              </div>
              <div className="flex w-full items-center space-x-2">
                <Button className="w-2/4 bg-blue-500 text-white hover:bg-blue-500 text-bold">
                  BUY NOW
                </Button>
                <Button className="w-2/4 bg-[#FF9800] text-white hover:bg-[#FF9800] text-bold">
                  ADD TO CART
                </Button>
              </div>
            </div>
          </div>
        <div className="w-full lg:w-3/5 pl-10 flex flex-col justify-between">
            <h1 className="text-4xl xl:text-5xl font-bold text-white">
              Complete React Native Developer Course 2022
            </h1>
            <h3 className="text-lg lg:text-xl text-white mt-5">
              Updated! Become a Senior React Developer. Build a massive
              E-commerce app with Redux, Hooks, GraphQL, Stripe, Firebase
            </h3>
            <h3 className="text-xl text-white mt-2">by Jack Sparrow</h3>
            <CustomRating initialRating={4} readOnly />
            <div className="text-white py-2 px-5 font-bold w-fit border border-white rounded-md mt-2">
              921 students
            </div>
            <div className="bg-white shadow-lg w-full h-44 p-2 mt-3 rounded-lg">
              <h2>Course outcomes</h2>
              <ul className="h-full flex flex-col flex-wrap list-disc px-5 font-light marker:text-blue-500">
                {
                  [...Array(9)].map(i => <li className="text-xl">item</li>)
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl w-full h-fit mx-auto px-10 md:px-7 lg:px-3 mt-5 py-5">
          <div className="w-full h-96 bg-white shadow-xl p-4">
            content
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
