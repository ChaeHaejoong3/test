import { createBrowserRouter } from "react-router-dom";
import PostCreatePage from "../features/posts/pages/PostEditPage";
import AppLayout from "./layouts/AppLayout";
import DocumentLayout from "./layouts/AppLayout";
import PostDetailPage from "@/features/posts/pages/PostDetailPage";

export const router = createBrowserRouter([
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
]);
