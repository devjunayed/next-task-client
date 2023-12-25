import { FaSignal, FaUser } from "react-icons/fa";
import Feature from "./Feature/Feature";
import { IoMdMove } from "react-icons/io";

const Features = () => {
    return (
        <div className="py-10">
            <h1 data-aos="fade-up" className="text-2xl font-advent my-4 md:my-6 md:text-5xl text-center text-orange-600">Key Features</h1>
            <p data-aos="fade-up" className="text-center font-lighter font-opensans">Explore the key features of our platform designed to enhance your user experience.</p>
            <div className="flex gap-4 flex-col md:flex-row mx-4 md:mx-10 my-4 md:my-10">
                <div data-aos="fade-right">
                    <Feature

                        title="User Authentication"
                        icon={<FaUser />}
                        description="Secure, reliable user authentication that scales with your user base."
                    />
                </div>
               <div  data-aos="fade-in">
               <Feature
           
                    title="Drag-and-Drop Functionality"
                    icon={<IoMdMove />}
                    description="Robust drag-and-drop functionality for a more intuitive user experience."
                />
               </div>
               <div      data-aos="fade-left">
               <Feature
                    title="Notifications"
                    icon={<FaSignal />}
                    description="Stay updated with real-time notifications and alerts."
                />
               </div>
               
            </div>
            <div  data-aos="flip-left" className="text-center md:space-x-6 space-x-2">
                <button className="btn bg-orange-600 text-white">Learn More</button>
                <button className="btn btn-outline text-orange-600 border-orange-600">Contact Us</button>
            </div>
        </div>
    );
};

export default Features;