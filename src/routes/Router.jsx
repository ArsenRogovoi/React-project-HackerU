import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import Sandbox from "../sandbox/Sandbox";
import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../users/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
      <Route path={ROUTES.CARDS} element={<CardsPage />}></Route>
      <Route
        path={`${ROUTES.CARD_INFO}/:id`}
        element={<CardDetailsPage />}
      ></Route>
      <Route path={ROUTES.SIGNUP} element={<SignupPage />}></Route>
      <Route path={"/sandbox"} element={<Sandbox />}></Route>
      <Route path={"*"} element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default Router;
