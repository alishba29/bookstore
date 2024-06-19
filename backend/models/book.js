const mongoose = require("mongoose");

const order = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },

    titlr: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    Language: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("books", book);
