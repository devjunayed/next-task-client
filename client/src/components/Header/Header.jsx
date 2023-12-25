import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            !user && <>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </>
        }
        {
            user &&
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        }
    </>;

    const handleLogOut = () => {
        logOut()
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged out Successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/");
    }
    return (
        <div className="navbar bg-orange-600 " data-aos="fade-in">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="uppercase menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow lg:text-white bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className=" text-3xl font-advent italic tracking-widest text-white">NextTask</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu lg:text-white uppercase menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <>
                        <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu p-4 menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
                                <p className="text-xl text-center">{user.displayName}</p>
                                <button className="btn" onClick={handleLogOut}>Logout</button>
                            </ul>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;