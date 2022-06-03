import React from "react";
import CustomFormInput from "../customInput/customFormInput.component";
import CustomButton from "../customButtons/customButton.component";
import { Button } from "@mui/material";

const TeachingExperienceForm = ({ setStatus }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(2);
  };

  const handleBackClick = () => {
    setStatus(0);
  };

  return (
    <form className="flex flex-col mt-12" onSubmit={handleSubmit}>
      <h1 className="text-5xl mb-5">Tell us about your backgound</h1>
      <div className="flex flex-col gap-4">
        <CustomFormInput
          placeholder="eg. B Tech"
          label="Highest Education"
          type="text"
        />
        <CustomFormInput
          placeholder="eg. Software development"
          label="Field of work"
        />
        <CustomFormInput
          label="Years Of Experience"
          small
          type="number"
          placeholder="eg. 5"
        />
        <div className="mb-12">
          <h1 className="text-2xl text-blue-500">
            Upload educational certificates
          </h1>
          <Button className="bg-[#FF9800] text-white px-5 mt-2 font-semibold tracking-wider hover:bg-[#FF9800] hover:text-white">
            UPLOAD
          </Button>
        </div>
        <div className="flex justify-between w-2/4">
          <CustomButton onClick={handleBackClick} type="button">
            BACK
          </CustomButton>
          <CustomButton type="submit">NEXT</CustomButton>
        </div>
      </div>
    </form>
  );
};

export default TeachingExperienceForm;
