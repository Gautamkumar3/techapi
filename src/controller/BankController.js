const BankChargesModal = require("../model/bank");

const addBankCharges = async (req, res) => {
  try {
    const BankCharges = new BankChargesModal({ ...req.body });
    await BankCharges.save();
    res.status(200).send({ status: "success", data: BankCharges });
  } catch (er) {
    res.status(401).send({ status: "error", message: er.message });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedData = await BankChargesModal.findByIdAndUpdate(
      id,
      { status: req.body.status },
      { new: true }
    );
    res.status(200).send({ status: "success", data: updatedData });
  } catch (er) {
    res.status(401).send({ status: "error", message: er.message });
  }
};

const getBankCharges = async (req, res) => {
  try {
    const BankCharges = await BankChargesModal.find();
    res.status(200).send(BankCharges);
  } catch (er) {
    res.status(401).send({ status: "error", message: er.message });
  }
};

module.exports = {
  addBankCharges,
  getBankCharges,
  updateStatus,
};
