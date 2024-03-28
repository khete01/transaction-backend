const { mongoose, Schema } = require("mongoose");

const transactionSchema = new Schema({
  userId: { type: String, required: true },
  category: {
    type: String,
    enum: ["Food", "shopping", "bills", "clothing"],
  },
  transactionTitle: String,
  amount: { type: Number, required: true },
  createdAt: String,
  note: String,
  transactionType: {
    type: String,
    enum: ["income", "expense"],
  },
});

const transactionModel = mongoose.model("transactions", transactionSchema);
module.exports = transactionModel;
