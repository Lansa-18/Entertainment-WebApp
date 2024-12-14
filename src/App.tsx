import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

// LAZY LOADING THE PAGES
const HomePage = lazy(() => import("./pages/Homepage"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movies",
      },
      {
        path: "/tv-series",
      },
      {
        path: "/bookmarks",
      }
    ]
  }
])




export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
