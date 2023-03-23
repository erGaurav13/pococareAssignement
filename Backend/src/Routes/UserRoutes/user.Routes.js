const express = require("express");
const { createUser } = require("../../Controller/user.controller");

const UserRouter = express.Router();

UserRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(404).send({ message: "Required all fields" });
  }

  try {
    const { message } = await createUser(name, email, password);
    if (message == "User exist Already") {
     return  res.status(400).send({ message: "User already exists" });
    }
    return res.status(201).send(message);
  } catch (e) {
    console.log(e)
    return res.send(e);
  }
});

UserRouter.post("/login", (req, res) => {
  res.send("Login");
});

module.exports = UserRouter;
