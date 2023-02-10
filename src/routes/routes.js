import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/user/:id", element: <Home /> },
    ],
  },
]);
