const categoryService = require('../services/category.service');
const { validateCategoryBody } = require('../services/validations');

const createCategory = async (req, res) => {
  const { error } = validateCategoryBody(req.body);
  const categories = await categoryService.getAll();
  const lastId = categories[categories.length - 1].id;
  
  if (error) { return res.status(400).json({ message: error.message }); }
  
  const category = await categoryService.createCategory(req.body);
  
  return res.status(201).json({ id: lastId + 1, name: category.name });
};

module.exports = {
  createCategory,
};