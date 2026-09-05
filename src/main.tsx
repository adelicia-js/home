import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";

// App renders the scene machine, which derives the current scene from the URL.
// The children exist so /explore and /explore/:planet match the App layout
// (rather than 404ing); their elements are null because App ignores the Outlet.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: null },
      { path: "explore", element: null },
      { path: "explore/:planet", element: null },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
