import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Accordian from "./../components/accordian/accordian";
import Color from "./../components/random-color/color";
import StarRating from "../components/star-rating/star";
import HomePage from "../components/Home/homepage";
import ImageSlider from "./../components/image-slider/imageSlider";
import Nav from "../components/recursive-nav/nav";
import data from "../components/recursive-nav/data";

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
    {
      path: "/image-slider",
      element: (
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={10}
          page={1}
        />
      ),
    },
    {
      path: "tree-view",
      element: <Nav data={data} />,
    },
  ]);
  return <RouterProvider router={router} />;
}
