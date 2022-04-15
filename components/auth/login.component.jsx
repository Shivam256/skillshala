import React, { useEffect,useState } from "react";
import { Button, TextField } from "@mui/material";

import CustomInput from "../customInput/customInput.component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations";
import { Fade } from "react-reveal";

import { useMutation } from "@apollo/client";
import { LoginMutation } from "../../graphql/mutations";
import LoadingScreen from "../loadingScreen/loadingScreen.component";

const Login = ({ setMode }) => {
  const [isloading,setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [login, { data, loading, error }] = useMutation(LoginMutation, {
    onCompleted: (data) => {
      console.log(data);
      setIsLoading(false);
    },
  });

  const handleLogin = (data) => {
    login({
      variables: { input: { email: data.email, password: data.password } },
    });
  };

  useEffect(() => {
    setIsLoading(loading);
  }, [data, loading]);

  return (
    <LoadingScreen loading={isloading}>
      <div className="w-full h-full flex flex-col justify-center space-y-4 ">
        <Fade>
          <h1 className="text-6xl mb-5">Log In</h1>
        </Fade>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col space-y-2"
        >
          <CustomInput
            name="email"
            placeholder="Email"
            register={register}
            errors={errors}
            type="text"
          />
          <CustomInput
            name="password"
            placeholder="Password"
            register={register}
            errors={errors}
            type="text"
          />
          <Fade delay={1000} bottom>
            <Button
              className="w-fit py-2 px-10 bg-blue-500 hover:bg-blue-500 font-bold text-xl text-white hover:text-white"
              type="submit"
            >
              LOG IN
            </Button>
          </Fade>
        </form>

        <Fade delay={1200} bottom>
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
        </Fade>
      </div>
    </LoadingScreen>
  );
};

export default Login;
