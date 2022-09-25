const postService = require('../services/post.service');

const getAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();

  res.status(200).json(posts);
};

module.exports = {
  getAllPosts,
};