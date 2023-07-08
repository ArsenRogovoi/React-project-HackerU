import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import useAxios from "../../hooks/useAxios";
import {
  getUserDetails,
  login,
  signup,
  updateUser,
} from "../services/userApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnackbar } from "../../providers/SnackbarProvider";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, setUser, setToken } = useUser();
  useAxios();
  const snack = useSnackbar();
  const navigate = useNavigate();

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

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (user) => {
      try {
        const normalizedUser = normalizeUser(user);
        await signup(normalizedUser);
        await handleLogin({ email: user.email, password: user.password });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );

  const handleUpdateUser = async (userId, editedUser) => {
    try {
      requestStatus(true, null, users, user);
      const normalizedUser = normalizeUser(editedUser);
      const newUser = await updateUser(userId, normalizedUser);
      snack("User data updated successfully", "success");
      requestStatus(false, null, users, newUser);
    } catch (error) {
      requestStatus(false, error, users, user);
    }
  };

  const getUserFromServer = async (userId) => {
    try {
      requestStatus(true, null, users, user);
      const userFromServer = await getUserDetails(userId);
      requestStatus(false, null, users, user);
      return userFromServer;
    } catch (error) {
      requestStatus(false, error, users, user);
    }
  };

  return {
    isLoading,
    error,
    user,
    users,
    handleLogin,
    handleLogout,
    handleSignup,
    handleUpdateUser,
    getUserFromServer,
  };
};
export default useUsers;
