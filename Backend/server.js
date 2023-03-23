const express = require("express");
const { connect } = require("./src/MongoDb/mongodb.connect");
const UserRouter = require("./src/Routes/UserRoutes/user.Routes");
const PORT = 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routing table
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  return res.send("Hi");
});

app.listen(PORT, async () => {
  try {
    await connect;
  } catch (e) {
    console.log(e);
  }
  console.log(`server started at ${PORT}`);
});
