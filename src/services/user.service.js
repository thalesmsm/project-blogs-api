const { User } = require('../models');

const createUser = async (body) => {
  const user = await User.create(body);

  return user;
};

const getAll = async () => {
  const users = await User.findAll(
    { attributes: { exclude: ['password'] } },
  );

  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id,
    { attributes: { exclude: ['password'] } });

  if (!user) return { type: 404, message: 'User does not exist' };

  return { type: null, message: user };
};

module.exports = {
  createUser,
  getAll,
  getUserById,
};