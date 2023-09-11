import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import Screen from "../Pages/Screen";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Screen />,
      },
    ],
  },
]);
