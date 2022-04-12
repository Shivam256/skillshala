const User = require("../models/user.model");

export const getUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (_, { id }) => {
  const user = User.findById(id);
  if (!user) {
    throw new Error("User not found!");
  }
  return user;
};
