const User = require("./models/user.model.js");

import { getUsers, getUser } from "./queries/user.queries";
import {createUser} from './mutations/user.mutations';

const resolvers = {
  Query: {
    getUsers,
    getUser,
  },
  Mutation: {
    createUser
  },
};

export default resolvers;
