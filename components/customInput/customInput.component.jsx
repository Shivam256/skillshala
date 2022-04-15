import React from "react";
import { Fade } from "react-reveal";

const CustomInput = ({ register, placeholder, type, errors,name }) => {
  return (
    <Fade top delay={500}>
      <input
        type="text"
        className="w-3/4  border rounded-sm h-14 border-black px-3"
        placeholder={placeholder}
        {...register(name)}
      />
      <p className="text-xs text-red-500">{errors[name]?.message}</p>
    </Fade>
  );
};

export default CustomInput;
