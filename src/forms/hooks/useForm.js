const Joi = require("joi");
const { func } = require("prop-types");
const { object } = require("prop-types");
const { useMemo } = require("react");
const { useCallback } = require("react");
const { useState } = require("react");

const useForm = (initialForm, schema, handleSubmit) => {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleReset = useCallback(() => {
    setData(initialForm);
    setErrors({});
  }, [initialForm]);

  const validateProperty = useCallback(
    ({ name, value }) => {
      const obj = { [name]: value };
      const generateSchema = Joi.object({ [name]: schema[name] });
      const { error } = generateSchema.validate(obj);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      const errorMessage = validateProperty(target);
      if (errorMessage)
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
      else
        setErrors((prev) => {
          let obj = { ...prev };
          delete obj[name];
          return obj;
        });

      setData((prev) => ({ ...prev, [name]: value }));
    },
    [validateProperty]
  );

  const validateForm = useCallback(() => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    if (error) return error;
    return null;
  }, [schema, data]);

  const onSubmit = useCallback(() => {
    handleSubmit(data);
  }, [handleSubmit, data]);

  const value = useMemo(() => {
    return { data, errors };
  }, [data, errors]);

  return {
    value,
    onSubmit,
    handleChange,
    handleReset,
    validateForm,
  };
};

useForm.propTypes = {
  initialForm: object.isRequired,
  schema: object.isRequired,
  handleSubmit: func.isRequired,
};

export default useForm;