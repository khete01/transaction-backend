const transactionModel = require("../models/transactionModel");

const createIncome = async (req, res) => {
  const data = req.body;
  try {
    const response = await transactionModel.create(data);
    console.log(response);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send("error");
  }
};

const getIncome = async (req, res) => {
  const userId = req.params.userId;
  try {
    const transactions = await transactionModel.find({ userId });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).send(err);
  }
};
const deleteTransaction = async (req, res) => {
  const transactionId = req.params.id;
  try {
    const result = await transactionModel.findByIdAndDelete(transactionId);
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal error");
  }
};

const editTransaction = async (req, res) => {
  const transactionId = req.params.id;
  const updateData = req.body;
  try {
    const facts = await transactionModel.findByIdAndUpdate(
      transactionId,
      updateData,
      {
        new: true,
      }
    );
    res.status(200).send(facts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createIncome,
  getIncome,
  deleteTransaction,
  editTransaction,
};
