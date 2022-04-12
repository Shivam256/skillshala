import {gql} from 'apollo-server-micro';

const typeDefs = gql`
    type User{
        id:ID
        name:String
        email:String
        profilePic:String
    }
    input UserInput{
        name:String!
        email:String
        profilePic:String
    }
    type Query{
        getUser(id : ID!): User,
        getUsers:[User]
    }
    type Mutation{
        createUser(input:UserInput): User
    }
`;


export default typeDefs;
