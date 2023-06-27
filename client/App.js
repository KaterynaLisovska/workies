import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import SignUpPage from "./src/pages/SignUp";
import LoginPage from "./src/pages/Login";
import ErrorPage from "./src/pages/Error";
import RootLayout from "./src/pages/Root";
import HomePage from "./src/pages/Home";

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
    ],
  },
]);

const App = () => {
  setBasePath(
    "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/"
  );

  return (<RouterProvider router={router} />);
};

export default App;
