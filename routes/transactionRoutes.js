const { Router } = require("express");
const {
  getIncome,
  createIncome,
  deleteTransaction,
  editTransaction,
} = require("../controller/incomeController");

const transactionRoute = Router();

transactionRoute.get("/get-income/:userId", getIncome);
transactionRoute.post("/create-transaction", createIncome);
transactionRoute.delete("/delete/:id", deleteTransaction);
transactionRoute.put("/edit/:id", editTransaction);
module.exports = transactionRoute;
