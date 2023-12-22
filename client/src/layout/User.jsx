import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const User = () => {
    const url = useLocation().pathname.split("/")[1];
    console.log(url);
    return (
        <div>
            {
                (url === 'register' || url === 'login')
                ||
                <Header />
            }
            <Outlet />
            {
                (url === 'register' || url === 'login')
                ||
                <Footer />
            }
        </div>
    );
};

export default User;