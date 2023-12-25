import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";


const LoggedUser = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="overflow-x-hidden">
            <Header />
            <Outlet />
        </div>
    );
};

export default LoggedUser;