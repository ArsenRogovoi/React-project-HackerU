import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import Sandbox from "../sandbox/Sandbox";
import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import OnClick from "../sandbox/events/OnClick";
import MuiBottomNavigators from "../sandbox/layout/footer/MuiBottomNavigators";
import FatherPropTypes from "../sandbox/propTypes/FatherPropTypes";
import Events from "../sandbox/events/Events";
import SandboxLayout from "../sandbox/layout/SandboxLayout";
import LifecycleHooks from "../sandbox/lifecycle hooks/LifecycleHooks";
import PropTypes from "../sandbox/propTypes/PropTypes";
import LifeCycleHooksComp from "../sandbox/lifecycle hooks/LifeCycleHooksComp";
import Todo from "../sandbox/todo hw/Todo";
import Counter from "../sandbox/custom-hook/Counter";
import CustomHooks from "../sandbox/custom-hook/CustomHooks";
import A from "../sandbox/context/components/A";
import FormTest from "../sandbox/forms/FormTest";
import LoginPage from "../pages/LoginPage";
import Checkbox from "../sandbox/checkbox/Checkbox";
import MyCardsPage from "../cards/pages/MyCardsPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import EditUserPage from "../users/pages/EditUserPage";
import FavCardsPage from "../cards/pages/FavCardsPage";
import UsersPage from "../users/pages/UsersPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />}></Route>
      <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
      <Route path={ROUTES.CARDS} element={<CardsPage />}></Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />}></Route>
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />}></Route>
      <Route
        path={`${ROUTES.CARD_INFO}/:id`}
        element={<CardDetailsPage />}
      ></Route>
      <Route path={ROUTES.SIGNUP} element={<SignupPage />}></Route>
      <Route
        path={`${ROUTES.EDIT_CARD}/:id`}
        element={<EditCardPage />}
      ></Route>
      <Route path={`${ROUTES.EDIT_USER}`} element={<EditUserPage />}></Route>
      <Route path={`${ROUTES.FAV_CARDS}`} element={<FavCardsPage />}></Route>
      <Route path={`${ROUTES.CRM}`} element={<UsersPage />}></Route>
      <Route path={"/sandbox"} element={<Sandbox />}>
        <Route path="events" element={<Events />}>
          <Route path="on-click" element={<OnClick />} />
        </Route>
        <Route path="layout" element={<SandboxLayout />}>
          <Route
            path={"MuiBottomNavigators"}
            element={<MuiBottomNavigators />}
          />
        </Route>
        <Route path="lyfecycle-hooks" element={<LifecycleHooks />}>
          <Route path="lifecycle-hooks-comp" element={<LifeCycleHooksComp />} />
        </Route>
        <Route path="prop-types" element={<PropTypes />}>
          <Route path="father-prop-types" element={<FatherPropTypes />} />
        </Route>
        <Route path="todo" element={<Todo />} />
        <Route path="custom-hooks" element={<CustomHooks />}>
          <Route path="counter" element={<Counter />} />
        </Route>
        <Route path="A" element={<A />} />
        <Route path="form-test" element={<FormTest />} />
        <Route path="checkbox" element={<Checkbox />} />
      </Route>
      <Route path={"*"} element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default Router;
