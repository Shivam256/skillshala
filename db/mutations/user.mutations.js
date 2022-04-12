const User = require("../models/user.model");

export const createUser = async (_, { input }) => {
  try {
    const user = new User(input);
    await user.save();

    return user;
  } catch (err) {
    console.log(err);
  }
};
