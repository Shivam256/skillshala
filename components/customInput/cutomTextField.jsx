import React from "react";
import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({ inverted }) => ({
  width: "100%",
  "& label": {
    color: "#0288D1 !important",
  },
  "& MuiInputLabel-root": {
    color: "#0288D1" ,
  },
  "& MuiInputLabel-root.Mui-focused": {
    color: "#0288D1 !important",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#0288D1" ,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#0288D1", 
    },
    "&:hover fieldset": {
      borderColor: "#0288D1" ,
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0288D1", 
    },
  },
  "& input": {
    color: "#000",
  },
}));

const CustomTextField = ({ register, errors, name, ...props }) => {
  return (
    <div className="w-5/6">
      <StyledTextField {...props} />
      {/* <p className={`text-xs ${inverted?'text-red-400':'text-white'} mt-1`}>{errors[name]?.message}</p> */}
    </div>
  );
};

export default CustomTextField;
