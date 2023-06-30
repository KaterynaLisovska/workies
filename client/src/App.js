import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "normalize.css";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "./App.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ChangePasswordPage from "./pages/ChangePassword";
import UpdatePasswordPage from "./pages/UpdatePassword";
import UserProfilePage from "./pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "changepassword",
        element: <ChangePasswordPage />,
      },
      {
        path: "userprofile",
        element: <UserProfilePage />,
        children: [
          {
            path: "updatepassword",
            element: <UpdatePasswordPage />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  setBasePath(
    "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/"
  );

  return <RouterProvider router={router} />;
};

export default App;
