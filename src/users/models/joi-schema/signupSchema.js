import Joi from "joi";

const signupSchema = {
  first: Joi.string().min(2).max(256).required(),
  middle: Joi.string().min(2).max(256).allow(""),
  last: Joi.string().min(2).max(256).required(),
  phone: Joi.string()
    .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .rule({ message: 'user "phone" must be a valid phone number' })
    .required(),
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+\.([a-zA-Z]{2,5})$)/)
    .rule({ message: "invalid mail" })
    .required(),
  password: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .rule({
      message:
        'user "password" must be at list nine characters long and contain an uppercase latter, a lowercase letter, a number and one of the following characters: !@#$%^&*-',
    })
    .required(),
  url: Joi.string()
    .uri()
    .rule({ message: "user image mast be a valid url" })
    .allow(""),
  alt: Joi.string().min(2).max(256).allow(""),
  state: Joi.string().allow(""),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number(),
  isBusiness: Joi.boolean().required(),
};

export default signupSchema;
