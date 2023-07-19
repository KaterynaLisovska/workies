import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "normalize.css";
import "@shoelace-style/shoelace/dist/themes/light.css";

import "./App.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import SignUpPage from "./pages/SignUp";
import LogInPage from "./pages/LogIn";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ChangePasswordPage from "./pages/ChangePassword";
import UpdatePasswordPage from "./pages/UpdatePassword";
import UserProfilePage from "./pages/UserProfile";
import SuccessPage from "./pages/Success";

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
        element: <LogInPage />,
      },
      {
        path: "changepassword",
        element: <ChangePasswordPage />,
      },
      //   TODO 'updatepassword' route must be available with root level route, but not as a child route of 'userprofile'
      //   TODO please also find the suggestion about 'code' path param for this route in UpdatePassword.js
      //   TODO if you will use the 'updatepassword' route from profile page, you can skip 'code' path param because you will be loggedin for this case
      {
        path: "userprofile",
        element: <UserProfilePage />,
      },
      {
        path: "updatepassword",
        element: <UpdatePasswordPage />,
      },
      {
        path: "success",
        element: <SuccessPage />,
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
