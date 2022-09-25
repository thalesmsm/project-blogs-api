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

module.exports = { createUser, getAll };