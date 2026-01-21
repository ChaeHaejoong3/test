import { createBrowserRouter } from "react-router-dom";
import PostCreatePage from "../features/posts/pages/WritePostPage";
import AppLayout from "./layouts/AppLayout";
import DocumentLayout from "./layouts/AppLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/posts/new", element: <PostCreatePage /> }],
  },
  {
    element: <DocumentLayout />,
    children: [{ path: "/", element: <></> }],
  },
]);
