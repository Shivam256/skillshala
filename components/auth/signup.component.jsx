import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signUpSchema } from "../../validations";
import { Fade } from "react-reveal";

import CustomInput from "../customInput/customInput.component";
import { useMutation } from "@apollo/client";

import { SignInMutation } from "../../graphql/mutations";

const SignUp = ({ setMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const [signin, { data, loading, error }] = useMutation(SignInMutation);

  const onSubmit = async (data) => {
    const res = await signin({
      variables: { input: { email: data.email, name: data.name, password: data.password } },
    });
    console.log(res);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 ">
      <Fade>
        <h1 className="text-6xl mb-5">Sign Up</h1>
      </Fade>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2"
      >
        <CustomInput
          register={register}
          errors={errors}
          placeholder="Name"
          type="text"
          name="name"
        />
        <CustomInput
          register={register}
          errors={errors}
          placeholder="Email"
          type="text"
          name="email"
        />{" "}
        <CustomInput
          register={register}
          errors={errors}
          placeholder="Password"
          type="text"
          name="password"
        />{" "}
        <CustomInput
          register={register}
          errors={errors}
          placeholder="Confirm Password"
          type="text"
          name="cpassword"
        />
        <Fade delay={1000} bottom>
          <Button
            className="w-fit py-2 px-10 bg-blue-500 hover:bg-blue-500 font-bold text-xl text-white hover:text-white"
            type="submit"
          >
            SIGN UP
          </Button>
        </Fade>
      </form>

      <Fade delay={1200} bottom>
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
      </Fade>
    </div>
  );
};

export default SignUp;

export const getStaticProps = async () => {};
