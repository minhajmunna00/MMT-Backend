const express = require("express");
const router = express.Router();

const postsController = require("../controllers/posts.controller");

router.route("/post").post(postsController.createPost);
router.route("/posts").get(postsController.getPosts);

module.exports = router;
