// Component which help to show to user handling
// request of getting cards from server and show the cards.

import { arrayOf, bool, func, object, oneOfType, string } from "prop-types";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Cards from "./Cards";

const CardsFeedback = ({ isLoading, error, cards, onDelete, onLike }) => {
  if (isLoading) return <Spinner />;
  if (error) {
    if (typeof error === "string") {
      return <Error errorMessage={error} />;
    } else {
      return <Error errorMessage={error.message} />;
    }
  }
  if (cards && !cards.length)
    return (
      <div>
        {" "}
        Oops, there are no business cards in the database that match the
        parameters you entered
      </div>
    );
  if (cards) return <Cards cards={cards} onDelete={onDelete} onLike={onLike} />;
  return null;
};

CardsFeedback.propTypes = {
  isLoading: bool.isRequired,
  error: oneOfType([object, string]),
  cards: arrayOf(object),
  onDelete: func.isRequired,
};

export default CardsFeedback;
