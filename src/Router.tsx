import { createHashRouter } from "react-router-dom";
import { Home } from "./Home.tsx";
import { DefaultLayout } from "./_layout/defaultLayout";
import { PostsDetails } from "./components/PostsDetails/index.tsx";

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/details/:id", element: <PostsDetails /> },
      ],
    },
  ],
);