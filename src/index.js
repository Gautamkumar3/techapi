const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const userRouter = require("./route/userRoute");
const { bankRouter } = require("./route/bank");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/bank", bankRouter);

app.get("/", (req, res) => {
  res.send("Welcome to technocart");
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
