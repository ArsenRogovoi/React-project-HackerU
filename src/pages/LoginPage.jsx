import useUsers from "../users/hooks/useUsers";
import { useUser } from "../users/providers/UserProvider";
import useForm from "../forms/hooks/useForm";
import initialLoginForm from "../users/helpers/initialForms/initialLoginForm";
import loginSchema from "../users/models/joi-schema/loginSchema";
import ROUTES from "../routes/routesModel";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import Form from "../forms/components/Form";
import Input from "../forms/components/Input";

export default function LoginPage() {
  const { user } = useUser();
  const { handleLogin } = useUsers();

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
        title="login"
        styles={{ maxWidth: "450px" }}
        to={ROUTES.CARDS}
      >
        <Input
          label={"email"}
          name={"email"}
          type={"email"}
          error={value.errors.email}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          label={"password"}
          name={"password"}
          type={"password"}
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
      </Form>
    </Container>
  );
}
