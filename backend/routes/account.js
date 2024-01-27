const express = require('express');
const z = require("zod");
const router = express.Router();
const { User, Account } = require('../db');
const { authMiddleware } = require('../middleware');
const mongoose = require('mongoose');

// GET balance route
router.get('/balance', authMiddleware, async (req, res) => {
  const accountDetails = await Account.findOne({ userId: req.userId });

  res.json({
    balance: accountDetails.balance
  })
});

router.post('/transfer', authMiddleware, async (req, res) => {
  // Session initialization
  const session = await mongoose.startSession();

  // Start the transaction
  session.startTransaction();

  const { to, amount } = req.body;
  const senderDetails = await Account.findOne({ userId: req.userId }).session(session);

  // Insufficient balance handling
  if (!senderDetails || senderDetails.balance < parseInt(amount)) {
    await session.abortTransaction();
    return res.status(400).json({ message: "Insufficient balance" });
  }

  const toAccountDetails = await Account.findOne({ userId: to }).session(session);

  // Invalid receiver account handling
  if (!toAccountDetails) {
    await session.abortTransaction();
    return res.status(400).json({ message: "Invalid account" });
  }

  // Perform the transfer
  await Account.findOneAndUpdate({ userId: req.userId }, { $inc: { balance: -amount } }).session(session); // Debit
  await Account.findOneAndUpdate({ userId: to }, { $inc: { balance: amount } }).session(session); // Credit

  // Commit the transaction
  await session.commitTransaction();
  res.json({ message: "Transfer successful" });
});

module.exports = router;