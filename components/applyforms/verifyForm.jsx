import React from "react";
import CustomFormInput from "../customInput/customFormInput.component";
import CustomButton from "../customButtons/customButton.component";
import { Button } from "@mui/material";

const VerifyForm = ({setStatus}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(1);
  }

  return (
    <form className="flex flex-col mt-12" onSubmit={handleSubmit} >
      <h1 className="text-5xl mb-5">Verify yourself</h1>
      <div className="flex flex-col gap-4">
        <CustomFormInput
          placeholder="eg. Jack Sparrow"
          label="Full Name"
          type="text"
        />
        <CustomFormInput placeholder="eg. 28" label="Age" small type="number" />
        <CustomFormInput label="Date Of Birth" small type="date" />
        <div className="mb-12">
          <h1 className="text-2xl text-blue-500">Upload identification proof</h1>
          <Button className='bg-[#FF9800] text-white px-5 mt-2 font-semibold tracking-wider hover:bg-[#FF9800] hover:text-white'>UPLOAD</Button>
        </div>
        <CustomButton type="submit">NEXT</CustomButton>
      </div>
    </form>
  );
};

export default VerifyForm;
