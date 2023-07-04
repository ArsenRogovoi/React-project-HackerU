// Component which help to show to user handling
// request of getting cards from server and show the cards.

import { arrayOf, bool, func, object, string } from "prop-types";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Cards from "./Cards";

const CardsFeedback = ({ isLoading, error, cards, onDelete }) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && !cards.length)
    return (
      <div>
        {" "}
        Oops, there are no business cards in the database that match the
        parameters you entered
      </div>
    );
  if (cards) return <Cards cards={cards} onDelete={onDelete} />;
  return null;
};

CardsFeedback.propTypes = {
  isLoading: bool.isRequired,
  error: string,
  cards: arrayOf(object),
  onDelete: func.isRequired,
};

export default CardsFeedback;
