import { useEffect } from "react";
import useUsers from "../hooks/useUsers";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import UsersFeedback from "../components/UsersFeedback";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import { updateUserBusinessStatus } from "../services/userApiService";

const UsersPage = () => {
  const { isLoading, error, filteredUsers, handleGetUsers } = useUsers();
  const { user } = useUser();

  const navigate = useNavigate();
  if (user && !user.isAdmin) navigate(ROUTES.CARDS);

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleChangeUserType = (userId) => {
    updateUserBusinessStatus(userId);
    handleGetUsers();
  };

  return (
    <Container>
      <PageHeader
        title="Users"
        subtitle="On this page you can find all registrated users"
      />
      <UsersFeedback
        isLoading={isLoading}
        error={error}
        users={filteredUsers}
        handleChangeUserType={handleChangeUserType}
      />
    </Container>
  );
};
export default UsersPage;
