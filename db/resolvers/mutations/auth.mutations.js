const User = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const registerUser = async (_, { input }) => {
  try {
    console.log(input);
    const { name, email, password } = input;

    if (!name || !email || !password) {
      return null;
    }

    const np = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: np,
    });

    await user.save();
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (_, { input }) => {
  try {
    console.log(input);

    const { email, password } = input;
    if (!email || !password) {
      return {
        error:true,
        message:"Insufficient input"
      }
    }

    const user = await User.findOne({ email });
    if (!user) {
      return { error: true, message: "The user does not exist" };
    }
    console.log(user);
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return {
        error: true,
        message: "Incorrect credentials",
      };
    }
    const token = jwt.sign({ _id: user._id },'thisissecret', {
      expiresIn: "1000000ms",
    });

    return {
      token,
      user,
      error:false
    };
  } catch (err) {
    console.log(err);
  }
};
