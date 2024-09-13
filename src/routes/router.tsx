import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/auth/Login";
import TermsAndConditions from "../pages/TermsAndConditions";
import AboutUsPage from "../pages/AboutUsPage";
import Signup from "../pages/auth/Signup";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import { PrivateRoute } from "../pages/auth/PrivateRoute";
import Dashboard from "../pages/dashboad/dashboard";
import Home from "../pages/dashboad/Home";
import UsersTable from "../pages/dashboad/UsersTable";

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
      }
    ]
  }
]);

export default router;
