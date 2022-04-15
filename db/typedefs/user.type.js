import {gql} from 'apollo-server-micro';


const userTypes = gql`
    type User{
        id:ID
        name:String
        email:String
        password:String
        profilePic:String
    }
    input UserInput{
        name:String!
        email:String
        profilePic:String
    }
    input RegisterUserInput{
        name:String!
        email:String
        password:String
    }
    input LoginInput{
        email:String
        password:String
    }
    type Query{
        getUser(id : ID!): User,
        getUsers:[User]
    }
    type LoginPayload{
        user:User
        token:String
        error:Boolean
        message:String
    }
    type Mutation{
        createUser(input:UserInput): User
        registerUser(input:RegisterUserInput):User
        loginUser(input:LoginInput):LoginPayload
    }
`;


export default userTypes;