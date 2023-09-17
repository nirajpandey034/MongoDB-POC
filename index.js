require("dotenv").config();
const express = require("express");
const app = express();
const DBConnect = require("./config/database");
const UserRoute = require("./routes/User.route");

DBConnect();

app.use("/user", UserRoute);

// default route
app.get("*", (req, res, next) => {
  return res.json({ msg: "Welcome Back" });
});
app.listen(process.env.APP_PORT, (err) => {
  if (err) console.log("Something went wrong");
  console.log(`Listening at ${process.env.APP_PORT}`);
});
