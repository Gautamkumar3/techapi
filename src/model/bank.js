const mongoose = require("mongoose");

const BankChargeSchema = new mongoose.Schema({
  batch_no: { type: Number },
  month: { type: String, required: true },
  project_code: { type: String, required: true },
  project_name: { type: String, required: true },
  instm_type: { type: String, required: true },
  instm_no: { type: Number },
  bank: { type: String, required: true },
  charge_type: { type: String, required: true },
  status: { type: Boolean, default: false },
});

BankChargeSchema.pre("save", function (next) {
  let b_num = Math.floor(Math.random() * 9000000) + 10000000;
  let i_num = Math.floor(Math.random() * 90000) + 10000;
  this.batch_no = b_num;
  this.instm_no = i_num;
  next();
});

const BankCharges = mongoose.model("bank-charge", BankChargeSchema);

module.exports = BankCharges;
