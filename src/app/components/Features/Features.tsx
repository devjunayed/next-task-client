import { FaSignal, FaUser } from "react-icons/fa";
import Feature from "./Feature/Feature";
import { IoMdMove } from "react-icons/io";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

const Features = () => {
  return (
    <div className="py-10">
      <ScrollAnimate  type="fade-up">
        <h1 className="text-2xl font-advent my-4 md:my-6 md:text-5xl text-center text-orange-600">
          Key Features
        </h1>
      </ScrollAnimate>
      <ScrollAnimate type="fade-up">
        <p className="text-center font-lighter font-opensans">
          Explore the key features of our platform designed to enhance your user
          experience.
        </p>
      </ScrollAnimate>
      <div className="flex gap-4 flex-col md:flex-row mx-4 md:mx-10 my-4 md:my-10">
        <ScrollAnimate type="fade-right">
          <Feature
            title="User Authentication"
            icon={<FaUser />}
            description="Secure, reliable user authentication that scales with your user base."
          />
        </ScrollAnimate>
        <ScrollAnimate type="fade-up">
          <Feature
            title="Drag-and-Drop Functionality"
            icon={<IoMdMove />}
            description="Robust drag-and-drop functionality for a more intuitive user experience."
          />
        </ScrollAnimate>
        <ScrollAnimate type="fade-left">
          <Feature
            title="Notifications"
            icon={<FaSignal />}
            description="Stay updated with real-time notifications and alerts."
          />
        </ScrollAnimate>
      </div>
      <ScrollAnimate
        type="fade-in"
        className="text-center md:space-x-6 space-x-2"
      >
        <button className="btn bg-orange-600 text-white">Learn More</button>
        <button className="btn btn-outline text-orange-600 border-orange-600">
          Contact Us
        </button>
      </ScrollAnimate>
    </div>
  );
};

export default Features;
