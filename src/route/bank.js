const express = require("express");
const {
  getBankCharges,
  addBankCharges,
  updateStatus,
} = require("../controller/BankController");

const bankRouter = express.Router();

bankRouter.get("/", getBankCharges);
bankRouter.post("/", addBankCharges);
bankRouter.patch("/:id", updateStatus);

module.exports = {
  bankRouter,
};
