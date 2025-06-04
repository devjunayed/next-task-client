import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import User from "../layout/User";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoggedUser from "../layout/LoggedUser";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";


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
      path: "/dashboard",
      element: <PrivateRoutes>
        <LoggedUser />
      </PrivateRoutes>,
      children: [
        {
          path: "/dashboard",
          element: <PrivateRoutes>
             <Dashboard />
          </PrivateRoutes>
        }
      ]
    },
  ]);

  export default router;