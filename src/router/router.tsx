import { App } from "../app/app";
import { createBrowserRouter } from "react-router-dom"
import { FlightsPage } from "../pages/flights"
import { FlightPage } from "../pages/flight";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <FlightsPage />,
      },
      {
        path: "flight/:id",
        element: <FlightPage />,
      },
    ],
  },
]);