const { User } = require("../models/user.model");
const { accessErrorHandler } = require("../../../lib/errorHandler");

exports.createUser = async user => {
  try {
    return await User.create(user);
  } catch (err) {
    console.error(err);
    throw accessErrorHandler(err);
  }
};

exports.updateUser = async user => {
  try {
    return await User.update(user, { where: { id: user.id } });
  } catch (err) {
    throw accessErrorHandler(err);
  }
};

exports.getAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (err) {
    throw accessErrorHandler(err);
  }
};

exports.findById = async id => {
  try {
    return await User.findOne({ where: { id } });
  } catch (err) {
    throw accessErrorHandler(err);
  }
};

exports.findByEmail = async email => {
  try {
    return await User.findOne({ where: { email } });
  } catch (err) {
    throw accessErrorHandler(err);
  }
};
