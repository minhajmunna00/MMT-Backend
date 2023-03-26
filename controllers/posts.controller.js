const {
  createPostService,
  getPostsService,
} = require("../services/posts.services");

exports.createPost = async (req, res) => {
  try {
    const result = await createPostService(req.body);

    res.status(201).json({
      status: "success",
      message: "Sucessfully Create a Post",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't create a post",
      error: error.message,
    });
  }
};
exports.getPosts = async (req, res) => {
  try {
    const result = await getPostsService();

    res.status(200).json({
      status: "success",
      message: "Sucessfully get the data",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't get a data",
      error: error.message,
    });
  }
};
