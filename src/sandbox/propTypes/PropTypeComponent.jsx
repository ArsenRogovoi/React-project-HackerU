import React from "react";
import PropTypes from "prop-types";

const PropTypeComponent = (props) => {
  const { obj } = props;
  return <div>PropTypeComponent</div>;
};

PropTypeComponent.propTypes = {
  obj: PropTypes.exact({
    key1: PropTypes.string,
    key2: PropTypes.bool,
  }),
  string: PropTypes.string,
  number: PropTypes.number,
  boolean: PropTypes.bool,
  object: PropTypes.objectOf(PropTypes.string),
  array: PropTypes.arrayOf(PropTypes.number),
  cb: PropTypes.func,
  arrayOfObject: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.bool)),
};

export default PropTypeComponent;
