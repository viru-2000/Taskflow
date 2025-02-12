import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Importing Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import AdminPanel from "../pages/AdminPanel";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import BecomeTasker from "../pages/BecomeTasker";
import Titleservice from "../pages/title";
import GetTenDollars from "../pages/get$10";
import ProviderServices from "../pages/ProviderServices";
import CustomerList from "../pages/CustomerList";
import UserFeedback from "../components/UserFeedback";

// Import Vendor Dashboard
import VendorDashboard from "../pages/VendorDashboard";
import Booking from "../pages/Booking";

// Account Components
import Account from "../components/Account";
import AccountBalance from "../components/AccountBalance";
import Billing_info from "../components/Billing_info";
import CancelTask from "../components/CancelTask";
import DeactivateAccount from "../components/DeactivateAccount";
import Notification from "../components/Notification";
import Password from "../components/Password";
import Profile from "../components/Profile";
import Transaction from "../components/Transaction";
import BookingConfirmation from "../pages/BookingConfirmation";
import Vendors from "../pages/Vendors";
import Userhome from "../pages/Dashboard";
import PaymentUI from "../pages/PaymentUI";
import VendorProfile from "../pages/VendorProfile";
import Orders from "../pages/Orders";
import Analytics from "../pages/Analytics";
import ServiceRequest from "../pages/ServiceRequest";
import Overview from "../pages/Overview";
import Userfeedback from "../components/UserFeedback";
import ReportsAnalytics from "../pages/AdminControl/ReportsAnalytics";
import ServiceManagement from "../pages/AdminControl/ServiceManagement";
import ServiceProviders from "../pages/AdminControl/ServiceProviders";
import BillingPayments from "../pages/AdminControl/BillingPayments";

// Create the router
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/become-tasker",
    element: <BecomeTasker />,
  },
  {
    path: "/get$10",
    element: <GetTenDollars />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/title-service/:id",
    element: <Titleservice />,
  },
  {
    path: "/service-details/:categoryName/:taskId",
    element: <ServiceDetails />,
  },
  {
    path: "/userhome",
    element: (
      <ProtectedRoute>
        <Userhome />
      </ProtectedRoute>
    ),
  },
  {
    path: "/vendor-dashboard",
    element: (
      <ProtectedRoute>
        <VendorDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="profile" />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "profile",
        element: <VendorProfile />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "services",
        element: <ServiceRequest />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminPanel />
      </ProtectedRoute>
    ),
  },
  {
    path: "/customers",
    element: <CustomerList />,
  },
  {
    path: "/providerservices",
    element: <ProviderServices />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/payment",
    element: <PaymentUI />,
  },
  {
    path: "/reportsanalytics",
    element: <ReportsAnalytics />,
  },
  {
    path: "/servicemanagement",
    element: <ServiceManagement />,
  },
  {
    path: "/providers",
    element: <ServiceProviders />,
  },
  {
    path: "/billingpayments",
    element: <BillingPayments />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/confirmation",
    element: <BookingConfirmation />,
  },
  {
    path: "/userfeedbacktoadmin",
    element: <Userfeedback />,
  },
  {
    path: "/vendors",
    element: <Vendors />,
  },
  {
    path: "/user-account",
    element: <Account />,
    children: [
      {
        path: "",
        element: <Navigate to="profile" />, // Redirect to profile by default
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "password",
        element: <Password />,
      },
      {
        path: "notifications",
        element: <Notification />,
      },
      {
        path: "billing-info",
        element: <Billing_info />,
      },
      {
        path: "cancel-task",
        element: <CancelTask />,
      },
      {
        path: "transactions",
        element: <Transaction />,
      },
      {
        path: "deactivate",
        element: <DeactivateAccount />,
      },
      {
        path: "userfeedback",
        element: <Userfeedback />,
      },
    ],
  },
]);

// App Routes Component
const AppRoutes = () => {
  return <RouterProvider router={appRoutes} />;
};

export default AppRoutes;
