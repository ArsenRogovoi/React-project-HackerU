//hook for managment of cards variables

import { useState } from "react";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  getCard,
  getCards,
  getMyCards,
  updateCard,
} from "../services/cardService";
import useAxios from "../../hooks/useAxios";
import { useSnackbar } from "../../providers/SnackbarProvider";
import normalizeCard from "../helpers/normalization/normalizeCard";

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useAxios();

  const snack = useSnackbar();

  const requestStatus = (Loading, errorMessage, cards, card = null) => {
    setLoading(Loading);
    setCards(cards);
    setCard(card);
    setError(errorMessage);
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetCard = async (id) => {
    try {
      setLoading(true);
      const card = await getCard(id);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetMyCards = async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleCreateCard = async (cardFromClient) => {
    try {
      setLoading(true);
      const normalizedCard = normalizeCard(cardFromClient);
      const card = await createCard(normalizedCard);
      requestStatus(false, null, null, card);
      snack("A new business card has been created", "success");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleUpdateCard = async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await updateCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      snack("Card updated successfully", "success");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      snack("Card deleted successfully", "success");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleLikeCard = async (cardId) => {
    try {
      setLoading(true);
      const card = await changeLikeStatus(cardId);
      const cards = await getCards();
      requestStatus(false, null, cards, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  return {
    card,
    cards,
    isLoading,
    error,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard,
  };
};

export default useCards;
