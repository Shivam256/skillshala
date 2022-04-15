import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const ApplyForm = () => {
  const Form1 = () => (
    <div className="mt-10">
      <h1 className="text-5xl">Step1: Verify yourself</h1>
    </div>
  );

  const Form2 = () => (
    <div className="mt-10">
      <h1 className="text-5xl">Step2: Your Experience in teaching</h1>
    </div>
  );

  const Form3 = () => (
    <div className="mt-10">
      <h1 className="text-5xl">Step3: Your field of teachinf</h1>
    </div>
  );

  return (
    <div className="w-full h-full p-10 ">
      <ProgressBar
        percent={0}
        filledBackground="linear-gradient(to right, #03A9F4, #0288D1)"
        height={7}
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`w-5 h-5 rounded-full  ${accomplished?'bg-blue-500':'bg-white'}`}></div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`w-5 h-5 rounded-full  ${accomplished?'bg-blue-500':'bg-gray-300'}`}></div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
         <div className={`w-5 h-5 rounded-full  ${accomplished?'bg-blue-500':'bg-gray-300'}`}></div>
          )}
        </Step>
      </ProgressBar>
      <Form1 />
    </div>
  );
};

export default ApplyForm;
