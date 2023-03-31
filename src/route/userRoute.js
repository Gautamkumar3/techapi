const express = require("express");
const { userLogin } = require("../controller/userController");

const userRouter = express.Router();

userRouter.post("/login", userLogin);

module.exports = userRouter;
