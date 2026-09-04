import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import ErrorPage from "./error-page";
import AboutMe from "./pages/about";
import Projects from "./pages/projects";
import Roadmap from "./pages/roadmap";

// Lazy so three/r3f/framer-motion stay out of the initial bundle for the
// existing routes.
const PlayExperience = React.lazy(() => import("./play/PlayExperience"));

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
  {
    path: "/roadmap",
    element: <Roadmap />,
  },
  {
    path: "/play",
    element: (
      <React.Suspense fallback={null}>
        <PlayExperience />
      </React.Suspense>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
