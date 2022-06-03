import React, { useState,useEffect } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import VerifyForm from "../../../components/applyforms/verifyForm";
import TeachingExperienceForm from "../../../components/applyforms/teachingExperienceForm";
import SocialMediaHandlesForm from "../../../components/applyforms/socialMediaHandlesForm";
import FinalForm from "../../../components/applyforms/finalForm";

const ApplyForm = () => {
  const [currentFormStatus, setCurrentFormStatus] = useState(0);
  // const [currentPercentage,setCurrentPercentage] = useState(1);
  // const Form1 = () => <VerifyForm setStatus={setCurrentFormStatus} />;

  // const Form2 = () => (
  //   <TeachingExperienceForm setStatus={setCurrentFormStatus} />
  // );

  // const Form3 = () => (
  //   <SocialMediaHandlesForm setStatus={setCurrentFormStatus} />
  // );

  let currentForm;
  let currentPercentage;
  if (currentFormStatus === 0) {
    currentForm = <VerifyForm setStatus={setCurrentFormStatus} />;
    currentPercentage=0;
    // setCurrentPercentage(1);
  } else if (currentFormStatus === 1) {
    currentForm = <TeachingExperienceForm setStatus={setCurrentFormStatus} />;
    // setCurrentPercentage(34);
    currentPercentage=34;
  } else if (currentFormStatus == 2) {
    currentForm = <SocialMediaHandlesForm setStatus={setCurrentFormStatus} />;
    // setCurrentPercentage(67);
    currentPercentage=67;
  }else if(currentFormStatus == 3){
    currentForm = <FinalForm setStatus={setCurrentFormStatus} />
    // setCurrentPercentage(100);
    currentPercentage=100;
  }


  useEffect(()=>{
    console.log(currentFormStatus);
  },[currentFormStatus])

  return (
    <div className="w-full h-full p-10 ">
      <ProgressBar
        percent={currentPercentage}
        filledBackground="linear-gradient(to right, #03A9F4, #0288D1)"
        height={5}
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div
              className={`w-4 h-4 rounded-full  ${
                accomplished ? "bg-blue-500" : "bg-white"
              }`}
            ></div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div
              className={`w-4 h-4 rounded-full  ${
                accomplished ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div
              className={`w-4 h-4 rounded-full  ${
                accomplished ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div
              className={`w-4 h-4 rounded-full  ${
                accomplished ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          )}
        </Step>
      </ProgressBar>
      {currentForm}
    </div>
  );
};

export default ApplyForm;
