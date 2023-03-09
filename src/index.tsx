import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import Find from "./pages/find";
import Login from "./pages/login";
import Register from "./pages/register";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/", // default route
    element: <Find />,
  },
  {
    path: "/find", // alternative route
    element: <Find />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

redirect("/find");

root.render(<RouterProvider router={router} />);
