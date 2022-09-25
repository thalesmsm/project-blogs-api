const { User } = require('../models');

const createUser = async (body) => {
  const user = await User.create(body);

  return user;
};

module.exports = { createUser };