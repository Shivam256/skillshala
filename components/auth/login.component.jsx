import React from "react";
import { Button, TextField } from "@mui/material";
const Login = ({ setMode }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 ">
      <h1 className="text-6xl mb-5">Log In</h1>
      <input
        type="text"
        className="w-3/4  border rounded-sm h-14 border-black px-3"
        placeholder="Email"
      />{" "}
      <input
        type="text"
        className="w-3/4  border rounded-sm h-14 border-black px-3"
        placeholder="Password"
      />
      <Button className="w-fit py-2 px-10 bg-blue-500 hover:bg-blue-500 font-bold text-xl text-white hover:text-white">
        LOG IN
      </Button>
      <h3 className="text-sm">
        New to skillshala?{" "}
        <button
          className="text-blue-500"
          onClick={() => {
            setMode("signup");
          }}
        >
          Create an account
        </button>
      </h3>
    </div>
  );
};

export default Login;
