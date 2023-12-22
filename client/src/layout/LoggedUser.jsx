import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const LoggedUser = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default LoggedUser;