const express = require("express");
const { createUser, loginUser } = require("../../Controller/user.controller");

const UserRouter = express.Router();

UserRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(404).send({ message: "Required all fields" });
  }

  try {
    const { message } = await createUser(name, email, password);
    if (message == "User exist Already") {
      return res.status(400).send({ message: "User already exists" });
    }
    return res.status(201).send(message);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "All Fields required" });
  }

  try {
    const { token, message, refreshtoken } = await loginUser({
      email,
      password,
    });
    if (!token) {
      return res
        .status(401)
        .send({ message, token, refreshtoken });
    }
    return res.status(200).send({ message, token, refreshtoken });
  } catch (e) {
    console.log(e);
    return res.status(501).send({ message: "Server Error" });
  }
});

module.exports = UserRouter;
