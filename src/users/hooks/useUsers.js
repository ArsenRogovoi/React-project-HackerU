import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import useAxios from "../../hooks/useAxios";
import { login } from "../services/userApiService";
import {
  getUser,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import ROUTES from "../../routes/routesModel";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();
  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, users, user = null) => {
      setLoading(loading);
      setUsers(users);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(
    async (user) => {
      const token = await login(user);
      setTokenInLocalStorage(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
      try {
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [navigate, requestStatus]
  );

  return {
    isLoading,
    error,
    user,
    users,
    handleLogin,
  };
};
export default useUsers;
