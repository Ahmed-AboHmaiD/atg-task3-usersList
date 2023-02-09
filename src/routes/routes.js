import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserInfo from "../components/UsersInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <App /> },
      { path: "/user/:id", element: <UserInfo /> },
    ],
  },
]);
