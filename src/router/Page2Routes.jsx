import { Page2 } from "../Page2";
import { Page404 } from "../Page404";
import { URLParameter } from "../URLParameter";

export const Page2Route = [
  {
    path: "",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: true,
    children: <URLParameter />
  },
  {
    path: "/*",
    exact: false,
    children: <Page404 />
  }
];
