import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accordian from "./../components/accordian/accordian";
import Color from "./../components/random-color/color";
import StarRating from "../components/star-rating/star";
import HomePage from "../components/Home/homepage";

export default function AppRoute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/accordian",
      element: <Accordian />,
    },
    {
      path: "/color",
      element: <Color />,
    },
    {
      path: "/star-rating",
      element: <StarRating />,
    },
  ]);
  return <RouterProvider router={router} />;
}
