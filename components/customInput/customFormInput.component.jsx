import { TextField } from "@mui/material";
import React from "react";

const CustomFormInput = ({  label, name, small,...props }) => {
  return (
    <div className={`mt-2 mb-3 ${small?'w-1/5 inline':'w-2/5'}`}>
      <label className="text-2xl text-blue-500">{label}</label>
      <br />
      <TextField variant="standard" fullWidth {...props} />
      {/* <input
        className={`w-full border-b-2 mt-1 border-gray-600 focus:outline-none focus:border-[#0288D1]`}
        {...props}
      /> */}
    </div>
  );
};

export default CustomFormInput;
