import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const User = () => {
    const url = useLocation().pathname.split("/")[1];
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="overflow-x-hidden">
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