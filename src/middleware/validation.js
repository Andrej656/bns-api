const Joi = require('joi');

const registerNameSchema = Joi.object({
  name: Joi.string().required(),
  owner: Joi.string().required(),
  zoneFileHash: Joi.string().required()
});

const validateRegisterName = (req, res, next) => {
  const { error } = registerNameSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { validateRegisterName };
