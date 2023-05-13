import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NewsFeed from "./components/NewsFeed";
import BookmarkedNews from "./components/BookmarkedNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <NewsFeed />,
      },
      {
        path: "bookmarked",
        element: <BookmarkedNews />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
