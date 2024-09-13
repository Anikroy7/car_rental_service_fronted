import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/auth/Login";
import TermsAndConditions from "../pages/TermsAndConditions";
import AboutUsPage from "../pages/AboutUsPage";
import Signup from "../pages/auth/Signup";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import { PrivateRoute } from "../pages/auth/PrivateRoute";
import Home from "../pages/dashboad/Home";
import Dashboard from "../pages/dashboad/Dashboard";
import UsersTable from "../pages/dashboad/UsersTable";
import AddCarForm from "../pages/dashboad/addCarForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    path: "/termsAndConditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/admin/dashboard',
    element: <PrivateRoute>
      <Dashboard />
    </PrivateRoute>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'manage/users',
        element: <UsersTable />
      },
      {
        path: 'manage/cars/add',
        element: <AddCarForm />
      },
    ]
  }
]);

export default router;
