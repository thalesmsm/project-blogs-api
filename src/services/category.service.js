const { Category } = require('../models');

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

const createCategory = async (body) => {
  const category = await Category.create(body);

  return category;
};

module.exports = {
  getAllCategories,
  createCategory,
};