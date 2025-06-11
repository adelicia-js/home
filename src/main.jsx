import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root.jsx";
import ErrorPage from "./error-page.jsx";
import AboutMe from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/me",
    element: <AboutMe />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
