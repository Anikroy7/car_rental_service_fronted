import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/auth/Login";
import TermsAndConditions from "../pages/TermsAndConditions";
import AboutUsPage from "../pages/AboutUsPage";


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
    path: "/login",
    element: <Login />,
  },
  
]);

export default router;
