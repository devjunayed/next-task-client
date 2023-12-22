import Benefit from "./Benefit/Benefit";
import { FiUser } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import { TbCashBanknote } from "react-icons/tb";

const Benefits = () => {
    return (
        <div className="bg-base-200 font-montserrat pb-20 px-4 md:px-20">
            <h1 className="text-center text-orange-600 my-4 pt-10 md:text-5xl text-3xl font-advent">Benefits</h1>
            <h3 className="md:text-4xl text-2xl text-center">Welcome to Next Task</h3>
            <p className="text-center">Empowering developers, corporate professionals, and bankers.</p>
            <div className="flex gap-4 mt-10 md:flex-row flex-col">
            <Benefit
             icon={<FiUser />}
             title="Developer"
             description='"As a developer, this platform has streamlined my workflow immensely."'
             />
            <Benefit
             icon={<GoTrophy />}
             title="Corporate Professionals"
             description='"This platform has made my corporate tasks much more manageable."'
             />
            <Benefit
             icon={<TbCashBanknote />}
             title="Bankers"
             description='"Banking has never been easier with this intuitive platform."'
             />
            </div>
        </div>
    );
};

export default Benefits;