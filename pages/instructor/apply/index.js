import React from "react";
import Lottie from "react-lottie";
import LearningLottie from "../../../assets/lotties/learning.json";
import LoadingScreen from "../../../components/loadingScreen/loadingScreen.component";
import { Button } from "@mui/material";
import {useRouter} from 'next/router';
// import CustomInput from '../../components/customInput/customInput.component.jsx';

const ApplyAsInstructor = () => {
  const router = useRouter();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LearningLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <LoadingScreen>
      <div className="w-screen h-full max-w-7xl mx-auto px-5 lg:px-2 py-5 flex">
        <div className="h-ful w-3/5 grid place-items-center">
          <Lottie options={defaultOptions} height="70%" width="100%" />
        </div>
        <div className="h-full w-2/5 flex flex-col space-y-5 justify-center">
          <h1 className="text-5xl">Want to be a part of <span className="font-bold text-blue-500">skillshala?</span></h1>
          <h1 className="text-2xl">
            Start teaching to thousands of students across the world
          </h1>
          <Button className="w-fit h-fut px-10 py-2 bg-blue-500 text-white hover:bg-blue-500 hover:text-white text-xl font-bold" onClick={()=>{
            router.push('/instructor/apply/form')
          }}>
            GET STARTED
          </Button>
        </div>
      </div>
    </LoadingScreen>
  );
};

export default ApplyAsInstructor;
