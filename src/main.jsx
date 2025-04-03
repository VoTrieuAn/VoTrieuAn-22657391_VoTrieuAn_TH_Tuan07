import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@pages/admin/layout/Layout";
import HomePage from "@pages/admin/HomePage";
import ProjectPage from "@pages/admin/ProjectPage";
import TeamPage from "@pages/admin/TeamPage";
import AnalyticsPage from "@pages/admin/AnalyticsPage";
import MessagesPage from "@pages/admin/MessagesPage";
import IntegrationPage from "@pages/admin/IntegrationPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "/teams",
        element: <TeamPage />,
      },
      {
        path: "/analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "/messages",
        element: <MessagesPage />,
      },
      {
        path: "/integrations",
        element: <IntegrationPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
