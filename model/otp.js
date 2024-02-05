const mongoose = require("mongoose");

const otpschema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
otpschema.index({ createdAt: 1 }, { expireAfterSeconds: 120 });

const Otp = mongoose.model("otp", otpschema);
module.exports = Otp;
