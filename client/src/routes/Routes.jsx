import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import User from "../layout/User";


const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
      children: [
        {
            path: "/",
            element: <Home />
        }
      ]
    },
    {
      path: "dashboard",
      element: <div>About</div>,
    },
  ]);

  export default router;