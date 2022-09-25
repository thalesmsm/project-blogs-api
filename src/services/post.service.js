const { BlogPost } = require('../models');
const { User, Category } = require('../models');

const getAllPosts = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return post;
};

module.exports = {
  getAllPosts,
};