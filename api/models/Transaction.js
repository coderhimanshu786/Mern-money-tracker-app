const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const TransactionSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, require: true},
  description: { type: String, required: true },
  datetime: { type: Date, required: true },
});

export const TransactionModel = model("Transaction", TransactionSchema);

module.exports = TransactionModel;
