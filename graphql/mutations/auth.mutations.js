import { gql } from "@apollo/client";

export const SignInMutation = gql`
  mutation Mutation($input: RegisterUserInput) {
    registerUser(input: $input) {
      id
      name
      email
      password
    }
  }
`;

export const LoginMutation = gql`
  mutation Mutation($input: LoginInput) {
    loginUser(input: $input) {
      user {
        name
        email
        id
        profilePic
      }
      token
      error
      message
    }
  }
`;
