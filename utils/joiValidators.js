const Joi = require("joi");

const { enums } = require("../constants");

const PASSWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/;

exports.createUserValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      name: Joi.string().max(30).alphanum().required(),
      email: Joi.string().email().required(),
      birthyear: Joi.number().min(1940).required(),
      password: Joi.string().regex(PASSWD_REGEX).required(),
      role: Joi.string().valid(...Object.values(enums.USER_ROLES_ENUM)),
    })
    .validate(data);

exports.updateUserValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      name: Joi.string().max(30).alphanum(),
      email: Joi.string().email(),
      birthyear: Joi.number().min(1940),
      role: Joi.string().valid(...Object.values(enums.USER_ROLES_ENUM)),
    })
    .validate(data);

exports.signupUserValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      name: Joi.string().max(30).alphanum().required(),
      email: Joi.string().email().required(),
      birthyear: Joi.number().min(1940).required(),
      password: Joi.string().regex(PASSWD_REGEX).required(),
    })
    .validate(data);

exports.loginValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(128).required(),
    })
    .validate(data);
