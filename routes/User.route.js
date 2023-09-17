const express = require("express");
const router = express.Router();
const UserModal = require("../models/User.model");

router.get("/getAll", async (req, res, next) => {
  const data = await UserModal.find({});
  return res.send(data);
});

module.exports = router;
