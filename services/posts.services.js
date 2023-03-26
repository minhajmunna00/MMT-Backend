const Posts = require("../models/Posts");

exports.createPostService = async (data) => {
  const result = await Posts.create(data);
  return result;
};

exports.getPostsService = async () => {
  const result = await Posts.find({});
  return result;
};
