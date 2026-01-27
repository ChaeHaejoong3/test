import { createBrowserRouter } from "react-router-dom";
import PostCreatePage from "../features/posts/pages/PostEditPage";
import AppLayout from "./layouts/AppLayout";
import DocumentLayout from "./layouts/DocumentLayout";
import PostDetailPage from "@/features/posts/pages/PostDetailPage";
import ErrorPage from "@/pages/ErrorPage";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: "/posts/new", element: <PostCreatePage /> },
          { path: "/posts/:id", element: <PostDetailPage /> },
        ],
      },
      {
        element: <DocumentLayout />,
        children: [{ path: "/", element: <></> }],
      },
    ],
  },
]);
