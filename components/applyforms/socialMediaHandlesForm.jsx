import React from "react";
import CustomFormInput from "../customInput/customFormInput.component";
import CustomButton from "../customButtons/customButton.component";
import { Button } from "@mui/material";

const SocialMediaHandlesForm = ({ setStatus }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(3);
  };

  return (
    <form className="flex flex-col mt-12" onSubmit={handleSubmit}>
      <h1 className="text-5xl mb-5">Add your social media handles.</h1>
      <div className="flex flex-col gap-4">
        <CustomFormInput
          label="LinkedIn profile url"
          placeholder="(optional)"
          type="text"
        />
        <CustomFormInput label="Facebook profile" placeholder="(optional)" />
        <CustomFormInput label="Instagram profile" placeholder="(optional)" />
      </div>
      <div className="flex justify-between w-2/4 mt-20">
        <CustomButton
          onClick={() => {
            setStatus(1);
          }}
        >
          BACK
        </CustomButton>
        <CustomButton type="submit">NEXT</CustomButton>
      </div>
    </form>
  );
};

export default SocialMediaHandlesForm;
