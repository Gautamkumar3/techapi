const express = require("express");
const {
  getBankCharges,
  addBankCharges,
} = require("../controller/BankController");

const bankRouter = express.Router();

bankRouter.get("/", getBankCharges);
bankRouter.post("/", addBankCharges);

module.exports = {
  bankRouter,
};
