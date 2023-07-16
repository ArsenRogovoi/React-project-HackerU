import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import ROUTES from "../../routes/routesModel.js";
import { Container, Fab } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import AddIcon from "@mui/icons-material/Add";
import CardsFeedback from "../components/CardsFeedback";

const MyCardsPage = () => {
  const { isLoading, error, cards, handleGetMyCards, handleDeleteCard } =
    useCards();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      handleGetMyCards();
    } else {
      navigate(ROUTES.CARDS);
    }
  }, [user]);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetMyCards();
  };

  const onLikeCard = () => {};

  return (
    <Container
      sx={{
        position: "relative",
        minHeight: "92vh",
      }}
    >
      <PageHeader
        title="My Cards"
        subtitle="Here you can find and create your business cards"
      />{" "}
      {cards && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_CARD)}
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
      )}
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
        onLike={onLikeCard}
      />
    </Container>
  );
};

export default MyCardsPage;
