import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import newCardSchema from "../models/joi-schema/newCardSchema";
import normalizeCard from "../helpers/normalization/normalizeCard";
import { useEffect } from "react";
import ROUTES from "../../routes/routesModel";
import mapCardToModel from "../helpers/normalization/mapCardToModel";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

const EditCardPage = () => {
  const { handleUpdateCard, handleGetCard, card } = useCards();
  const { user } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();

  const { value, ...rest } = useForm(initialCardForm, newCardSchema, () => {
    handleUpdateCard(card._id, {
      ...normalizeCard({ ...value.data }),
      bizNumber: card.bizNumber,
      user_id: card.user_id,
    });
    navigate(ROUTES.MY_CARDS);
  });

  useEffect(() => {
    handleGetCard(id).then((data) => {
      if (user._id !== data.user_id) navigate(ROUTES.CARDS);
      const modeledCard = mapCardToModel(data);
      rest.setData(modeledCard);
    });
  }, []);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
        styles={{ maxWidth: "800px" }}
        to={ROUTES.CARDS}
        title="Edit card"
      >
        <Input
          name={"title"}
          label={"name of business"}
          error={value.errors.title}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"subtitle"}
          label={"subtitle"}
          error={value.errors.subtitle}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"description"}
          label={"description"}
          error={value.errors.description}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"phone"}
          label={"phone for contact"}
          error={value.errors.phone}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"email"}
          label={"email for contact"}
          error={value.errors.email}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"web"}
          label={"website of business"}
          error={value.errors.web}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"url"}
          label={"image url for card"}
          error={value.errors.url}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"state"}
          label={"state"}
          error={value.errors.state}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"country"}
          label={"country"}
          error={value.errors.country}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"city"}
          label={"city"}
          error={value.errors.city}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"street"}
          label={"street"}
          error={value.errors.street}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"houseNumber"}
          label={"house number"}
          error={value.errors.houseNumber}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name={"zip"}
          label={"zip code"}
          error={value.errors.zip}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
      </Form>
    </Container>
  );
};
export default EditCardPage;
