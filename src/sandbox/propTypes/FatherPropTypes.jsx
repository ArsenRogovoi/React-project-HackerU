import PropTypeComponent from "./PropTypeComponent";

const FatherPropTypes = () => {
  return (
    <PropTypeComponent
      obj={{
        key1: "string",
        key2: true,
      }}
    />
  );
};

export default FatherPropTypes;
