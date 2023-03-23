const UserModel = require("../Models/User.Model");
const bcrypt = require("bcrypt");
const saltRound = 10;
const jwt = require("jsonwebtoken");

const createUser = async ( name, email, passwordnothash) => {
  try {
    // check if user is already exists;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return { message: 'User exist Already' }
    }

    // Hash Password;
    const password = await bcrypt.hash(passwordnothash, saltRound);

    // create User;
    const user = await UserModel.create({ name, email, password });
    return  { message: 'User registered successfully' }
  } catch (e) {
    console.log(e)
    return res.status(500).send({ message: 'Internal server error' })
  }
};

module.exports = {
  createUser,
};
