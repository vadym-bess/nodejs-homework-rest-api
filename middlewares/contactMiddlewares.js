const Joi = require("joi");
const { AppError, catchAsync, validators } = require("../utils");
const User = require("../db/schemas/userSchema");

exports.patchFavoriteValidation = (req, res, next) => {
  const schema = Joi.object({
    favorite: Joi.boolean().required(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    return res.status(400).json({ status: result.error.details });
  }
  next();
};

exports.postContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(2).required(),
    phone: Joi.number().min(2).required(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    return res.status(400).json({ status: result.error.message });
  }
  next();
};

exports.putContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(2).optional(),
    email: Joi.string().min(2).optional(),
    phone: Joi.number().min(2).optional(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    return res.status(400).json({ status: result.error.message });
  }
  next();
};

exports.checkSignupData = catchAsync(async (req, res, next) => {
  const { error, value } = validators.signupUserValidator(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  const { email } = value;

  const userExists = await User.exists({ email });

  if (userExists)
    return next(new AppError(409, "User with this email already exists.."));

  req.body = value;

  next();
});
