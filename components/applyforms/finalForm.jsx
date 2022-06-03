import React from "react";
import CustomFormInput from "../customInput/customFormInput.component";
import CustomButton from "../customButtons/customButton.component";

const FinalForm = ({ setStatus }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(2);
  };

  return (
    <form className="flex flex-col mt-12" onSubmit={handleSubmit}>
      <h1 className="text-5xl mb-5">
        You are one step away form being a part of skillshala !
      </h1>
      <div className="flex flex-col gap-4">
        <CustomFormInput label="Your Bank Account no" type="text" small />
        <CustomFormInput label="IFSC code" small />
        <CustomFormInput
          label="Your short description"
        //   placeholder="eg. I am an amazing developer who can teach even more amazingly !"
          multiline
          rows={3}
        />
      </div>
      <div className="flex justify-between w-2/4 mt-20">
        <CustomButton
          onClick={() => {
            setStatus(2);
          }}
        >
          BACK
        </CustomButton>
        <CustomButton type="submit">FINISH</CustomButton>
      </div>
    </form>
  );
};

export default FinalForm;
