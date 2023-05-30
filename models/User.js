const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userId: { type: "String", required: true },
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    pic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    contacts: [
      {
        userId: {
          type: String,
        },
      },
    ],
  },
  { timestaps: true }
);

module.exports = mongoose.model("User", userSchema);
