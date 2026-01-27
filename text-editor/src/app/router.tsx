import { createBrowserRouter } from "react-router-dom";
import PostCreatePage from "../features/posts/pages/PostEditPage";
import AppLayout from "./layouts/AppLayout";
import DocumentLayout from "./layouts/DocumentLayout";
import PostDetailPage from "@/features/posts/pages/PostDetailPage";
import GlobalErrorPage from "@/app/ui/error/GlobalErrorPage";
import RootLayout from "./layouts/RootLayout";
import Loading from "./ui/Loading";
import { loader as postDeatilLoader } from "@/pages/post/detail/loader";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <GlobalErrorPage />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: "/posts/new", element: <PostCreatePage /> },
          {
            path: "/posts/:id",
            element: <PostDetailPage />,
            loader: postDeatilLoader,
          },
        ],
      },
      {
        element: <DocumentLayout />,
        children: [{ path: "/", element: <></> }],
      },
    ],
  },
]);
