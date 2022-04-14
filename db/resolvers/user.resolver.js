import { getUsers, getUser } from "./queries/user.queries";
import {createUser} from './mutations/user.mutations';

const userResolvers = {
  Query: {
    getUsers,
    getUser,
  },
  Mutation: {
    createUser
  },
};

export default userResolvers;
