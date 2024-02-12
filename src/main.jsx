import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* imports pages */
import Layout from "./layouts/Main.jsx";
import SplashPage from "./pages/splash/Index";
import BoardingPage from "./pages/Boarding/Index";
import LoginPage from "./pages/auth/Login";
import VerifyPage from "./pages/loading/Index";
import OTPage from "./pages/OTP/Index"
import SuccessPage from "./pages/OTP/Success"
import HomePage from "./pages/home/Index";
import PaymentSuccess from "./pages/home/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <SplashPage />,
      },
      {
        path: "/boarding",
        element: <BoardingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/verify",
        element: <VerifyPage />,
      },
      {
        path: "/verify-otp",
        element: <OTPage />
      },
      {
        path: "/success",
        element: <SuccessPage />
      },
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
