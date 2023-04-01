import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const LoginPage = () => {
  const user = null;
  //   const user = true;

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return <div>LoginPage</div>;
};

export default LoginPage;
