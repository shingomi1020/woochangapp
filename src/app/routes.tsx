import { createHashRouter } from "react-router";
import Root from "./pages/Root";
import TodoList from "./pages/TodoList";
import Calendar from "./pages/Calendar";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: TodoList },
      { path: "calendar", Component: Calendar },
    ],
  },
]);
