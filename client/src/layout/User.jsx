import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
const User = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default User;