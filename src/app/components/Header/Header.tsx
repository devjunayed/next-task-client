"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */


import { useSession } from "next-auth/react";
import Link from "next/link";
// import Swal from "sweetalert2";

const Header = () => {
    // const { user, logOut } = useContext(AuthContext);
    // const navigate = useNavigate();

    const {data: session, status} = useSession();

    // if(status === "loading"){
    //     return <p>Loading ...</p>
    // }
    // if(!session){
    //     return <p>Not Signed in</p>
    // }

    const links = <>
        <li><Link href="/">Home</Link></li>
        {
            !session && <>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
            </>
        }
        {
            session &&
            <li><Link href="/dashboard">Dashboard</Link></li>
        }
    </>;

    // const handleLogOut = () => {
    //     logOut()
    //     Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Logged out Successfully!",
    //         showConfirmButhrefn: false,
    //         timer: 1500
    //       });
    //       navigate("/");
    // }
    return (
        <div className="navbar bg-orange-600 " data-aos="fade-in">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="buthrefn" className="btn text-white btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="uppercase menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow lg:text-white bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link href="/" className=" text-3xl font-advent italic tracking-widest text-white">NextTask</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu lg:text-white uppercase menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    session?.user &&
                    <>
                        <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="buthrefn" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={session.user.image as string} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu p-4 menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
                                <p className="text-xl text-center">{session.user.name}</p>
                                <button className="btn" onClick={() => {}}>Logout</button>
                            </ul>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;