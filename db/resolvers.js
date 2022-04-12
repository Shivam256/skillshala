const User = require("./models/user.model.js");

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (err) {
        console.log(err);
      }
    },
    getUser: async (_, { id }) => {
      const user = User.findById(id);
      if (!user) {
        throw new Error("User not found!");
      }
      return user;
    },
  },
  Mutation: {
    newUser: async (_, { input }) => {
      try {
        const user = new User(input);
        await user.save();

        return user;
      } catch (err) {
        console.log(err);
      }
    },
  },
};


export default resolvers;
