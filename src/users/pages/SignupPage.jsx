import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/signupSchema";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Checkbox, Container, FormControlLabel, Grid } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

const SignupPage = () => {
  const { handleSignup } = useUsers();
  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup
  );

  const { user } = useUser();
  if (user) return <Navigate replace to={ROUTES.CARDS} />;
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
        title="register"
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
          label={"phone"}
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
          name={"password"}
          label={"password"}
          error={value.errors.password}
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
        <Input
          name={"alt"}
          label={"image alt"}
          error={value.errors.alt}
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
          label={"zip"}
          error={value.errors.zip}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />

        <Grid item sm={12}>
          <FormControlLabel
            onChange={(e) => {
              rest.setData({ ...value.data, isBusiness: !!e.target.checked });
            }}
            name="isBusiness"
            control={<Checkbox value={value.data.isBusiness} color="primary" />}
            label="Signup as business"
            sx={{ pl: 1, mt: 1 }}
          />
        </Grid>
      </Form>
    </Container>
  );
};
export default SignupPage;
