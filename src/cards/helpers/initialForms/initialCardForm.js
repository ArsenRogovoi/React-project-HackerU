import Joi from "joi";

const initialCardForm = {
  title: Joi.string().min(2).max(256).required(),
  subtitle: Joi.string().min(2).max(256).allow(),
  description: Joi.string().min(2).max(256).required(),
  phone: Joi.string()
    .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .rule({ message: 'card "phone" must be a valid phone number' })
    .required(),
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+\.([a-zA-Z]{2,5})$)/)
    .rule({ message: "invalid mail" })
    .allow(),
  web: Joi.string().uri().rule({ message: "url is not valid" }).allow(""),
  url: Joi.string().uri().rule({ message: "url is not valid" }).allow(""),
  alt: "business card image",
  state: Joi.string().min(2).max(256).allow(),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number().allow(),
};
export default initialCardForm;
