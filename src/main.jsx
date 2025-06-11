import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root.jsx";
import ErrorPage from "./error-page.jsx";
import AboutMe from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Resume from "./pages/resume.jsx";
import TestPrj from "./pages/prjtest.jsx";
import './styles/index.css'

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
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/testing",
    element: <TestPrj/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
