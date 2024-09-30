import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/auth/Login";
import TermsAndConditions from "../pages/TermsAndConditions";
import Signup from "../pages/auth/Signup";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import { PrivateRoute } from "../pages/auth/PrivateRoute";
import Home from "../pages/dashboad/Home";
import Dashboard from "../pages/dashboad/Dashboard";
import UsersTable from "../pages/dashboad/UsersTable";
import AllCars from "../pages/dashboad/AllCars";
import UpdateCarForm from "../pages/dashboad/UpdateCarForm";
import { AdminPrivateRoute } from "../pages/auth/AdminPrivateRoute";
import CarDetails from "../pages/CarDetails";
import AddCarForm from "../pages/dashboad/AddCarForm";
import { AllCarsPage } from "../pages/AllCarsPage";
import Book from "../pages/Book";
import BookingCalender from "../pages/BookingCalender";
import AboutUs from "../pages/AboutUs";
import NotFoundPage from "../pages/NotFound";
import BookingConfirmation from "../pages/BookingConfirmation";
import AllBookins from "../pages/dashboad/AllBookings";
import MyBookings from "../pages/dashboad/Mybookings";
import MyProfile from "../pages/dashboad/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/all-cars",
    element: <AllCarsPage />,
  },
  {
    path: "/cars/:id",
    element: <CarDetails />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: '/book/confirm/:carId',
    element: <BookingConfirmation />
  },

  {
    path: "/book/:id",
    element: <PrivateRoute><Book /></PrivateRoute>,
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
        element: <AdminPrivateRoute><UsersTable /></AdminPrivateRoute>
      },
      {
        path: 'manage/cars/add',
        element: <AdminPrivateRoute><AddCarForm /></AdminPrivateRoute>
      },
      {
        path: 'manage/cars/update/:id',
        element: <AdminPrivateRoute> <UpdateCarForm /></AdminPrivateRoute>
      },
      {
        path: 'manage/cars/all',
        element: <AdminPrivateRoute> <AllCars /></AdminPrivateRoute>
      },
      {
        path: 'manage/bookings/all',
        element: <AdminPrivateRoute> <AllBookins /></AdminPrivateRoute>
      },

    ]
  },
  {
    path: '/user/dashboard',
    element: <PrivateRoute>
      <Dashboard />
    </PrivateRoute>,
    children: [
      {
        path: 'manage/bookings/my-bookings',
        element: <PrivateRoute> <MyBookings /></PrivateRoute>
      },
      {
        path: 'manage/user/my-profile',
        element: <PrivateRoute> <MyProfile /></PrivateRoute>
      },
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },

]);

export default router;
