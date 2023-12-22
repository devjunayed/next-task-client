import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import User from "../layout/User";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
      ]
    },
    {
      path: "dashboard",
      element: <div>About</div>,
    },
  ]);

  export default router;