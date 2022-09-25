const categoryService = require('../services/category.service');
const { validateCategoryBody } = require('../services/validations');

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();

  res.status(200).json(categories);
};

const createCategory = async (req, res) => {
  try {
    const { error } = validateCategoryBody(req.body);
    const categories = await categoryService.getAllCategories();
    const lastId = categories[categories.length - 1].id;
    
    if (error) { return res.status(400).json({ message: error.message }); }
  
    const category = await categoryService.createCategory(req.body);
    
    return res.status(201).json({ id: lastId + 1, name: category.name });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
};