const joi = require('joi');
const { password } = require('../../../models/users-schema');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      passwordConfirm: joi
        .string()
        .min(6)
        .max(32)
        .required()
        .label('passwordConfirm'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changePassword: {
    body: {
      oldPassword: joi.string().min(6).max(32).required().label('oldPassword'),
      newPassword: joi.string().min(6).max(32).required().label('newPassword'),
      passwordConfirm: joi
        .string()
        .min(6)
        .max(32)
        .required()
        .label('passwordConfirm'),
    },
  },
};
