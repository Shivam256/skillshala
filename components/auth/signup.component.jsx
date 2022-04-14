import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signUpSchema } from "../../validations";

const SignUp = ({ setMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 ">
      <h1 className="text-6xl mb-5">Sign Up</h1>
      <form
        onSubmit={handleSubmit((d) => {
          console.log(d);
        })}
        className='flex flex-col space-y-2'
      >
        <input
          type="text"
          className="w-3/4  border rounded-sm h-14 border-black px-3"
          placeholder="Name"
          {...register("name")}
        />
        <p className="text-xs text-red-500">{errors.name?.message}</p>
        <input
          type="text"
          className="w-3/4  border rounded-sm h-14 border-black px-3"
          placeholder="Email"
          {...register("email")}
        />
          <p className="text-xs text-red-500">{errors.email?.message}</p>
        <input
          type="text"
          className="w-3/4  border rounded-sm h-14 border-black px-3"
          placeholder="Password"
          {...register("password")}
        />
          <p className="text-xs text-red-500">{errors.password?.message}</p>
        <input
          type="text"
          className="w-3/4  border rounded-sm h-14 border-black px-3"
          placeholder="Confirm Password"
          {...register("cpassword")}
        />
          <p className="text-xs text-red-500">{errors.cpassword?.message}</p>
        <Button
          className="w-fit py-2 px-10 bg-blue-500 hover:bg-blue-500 font-bold text-xl text-white hover:text-white"
          type="submit"
        >
          SIGN UP
        </Button>
      </form>
      <h3 className="text-sm">
        Aleady have an account?{" "}
        <button
          className="text-blue-500"
          onClick={() => {
            setMode("login");
          }}
        >
          Login
        </button>
      </h3>
    </div>
  );
};

export default SignUp;
