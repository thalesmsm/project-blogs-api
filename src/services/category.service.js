const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const createCategory = async (body) => {
  const category = await Category.create(body);

  return category;
};

module.exports = {
  getAll,
  createCategory,
};