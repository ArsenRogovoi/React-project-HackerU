import useForm from "../../forms/hooks/useForm";
import mapUserToModel from "../helpers/normalization/mapUserToModel";
import useUsers from "../hooks/useUsers";
import ROUTES from "../../routes/routesModel";
import { useEffect } from "react";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import initialEditUserForm from "../helpers/initialForms/initialEditUserForm";
import editUserSchema from "../models/joi-schema/editUserSchema";
import { Navigate, useNavigate } from "react-router-dom";

const EditUserPage = () => {
  const { handleUpdateUser, user, getUserFromServer, isLoading, error } =
    useUsers();
  const navigate = useNavigate();
  const { value, ...rest } = useForm(
    initialEditUserForm,
    editUserSchema,
    () => {
      handleUpdateUser(user._id, value.data);
      navigate(ROUTES.CARDS);
    }
  );

  useEffect(() => {
    if (user && user._id) {
      getUserFromServer(user._id).then((data) =>
        rest.setData(mapUserToModel(data))
      );
    }
  }, []);

  if (!user) <Navigate to={ROUTES.CARDS} />;
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoading && !error)
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
            name={"first"}
            label={"first name"}
            error={value.errors.first}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name={"middle"}
            label={"middle name"}
            error={value.errors.middle}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name={"last"}
            label={"last name"}
            error={value.errors.last}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name={"phone"}
            label={"phone number"}
            error={value.errors.phone}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name={"email"}
            label={"email"}
            error={value.errors.email}
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
            name={"zip"}
            label={"zip"}
            error={value.errors.zip}
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
            name={"url"}
            label={"image url"}
            error={value.errors.url}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
        </Form>
      </Container>
    );
};
export default EditUserPage;
