const mongoose = require("mongoose");

// schema design
const postsSchema = mongoose.Schema(
  {
    tags: [{ type: "String" }],
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: { type: String },
    organization: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.model("Posts", postsSchema);

module.exports = Posts;
