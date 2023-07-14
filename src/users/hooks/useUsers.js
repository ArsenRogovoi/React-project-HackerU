import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import useAxios from "../../hooks/useAxios";
import {
  getUserDetails,
  getUsers,
  login,
  signup,
  updateUser,
  updateUserBusinessStatus,
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

  const [query, SetQuery] = useState("");
  const [filteredUsers, setFilter] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    SetQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (users) {
      setFilter(
        users.filter(
          (user) =>
            String(`${user.name.first} ${user.name.first}`).includes(query) ||
            String(`${user.name.first} ${user.name.first}`).includes(query) ||
            String(user._id).includes(query)
        )
      );
    }
  }, [users, query]);

  const requestStatus = useCallback(
    (loading, errorMessage, users, user = getUser()) => {
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

  const handleGetUsers = async () => {
    try {
      requestStatus(true, null, null);
      const users = await getUsers();
      requestStatus(false, null, users);
      return users;
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleUpdateUserBusinessStatus = async (userId) => {
    try {
      requestStatus(true, null, null);
      await updateUserBusinessStatus(userId);
      requestStatus(null, null, null);
    } catch (error) {
      requestStatus(null, error, null);
    }
  };

  return {
    isLoading,
    error,
    user,
    users,
    filteredUsers,
    handleLogin,
    handleLogout,
    handleSignup,
    handleUpdateUser,
    getUserFromServer,
    handleGetUsers,
    handleUpdateUserBusinessStatus,
  };
};
export default useUsers;
