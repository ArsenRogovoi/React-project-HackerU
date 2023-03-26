import PropTypes, { oneOf } from "prop-types";
import addressType from "./addressType";
import imageType from "./imageType";

const cardType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: addressType.isRequired,
  image: imageType.isRequired,
  bizNumber: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.string).isRequired,
  web: PropTypes.oneOfType([PropTypes.string, oneOf([undefined])]).isRequired,
  email: PropTypes.string.isRequired,
  user_id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
});

export default cardType;
