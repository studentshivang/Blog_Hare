const mongoose = require("mongoose");

const blogmodel = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
    images: {
      type: Object,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blogs",blogmodel);
