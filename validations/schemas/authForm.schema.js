import * as yup from "yup";

export const signUpSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
  cpassword: yup
    .string()
    .required('Confirm password is required')
    .test('password-test','Passwords must match',function(val){
      return this.parent.password === val;
    })
});

export const loginSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});
