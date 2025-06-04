/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ScrollFade } from "@/components/ui/ScrollFade";

const Banner = () => {
  return (
    <div className="hero min-h-[85vh] md:min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <ScrollFade>
          <img
            src={"/assets/banner.svg"}
            data-aos="fade-left"
            className="w-2/3 md:max-w-lg rounded-lg"
          />
        </ScrollFade>
        
        <ScrollFade direction="right">
          <h1 className="w-full text-2xl lg:text-5xl font-bold font-montserrat">
            Next Task Elvate Your Productivity
          </h1>
          <p className="py-3 md:py-6 font-opensans">
            Effortless task management for teams, bringing clarity and
            efficiency to your projects.
          </p>
          <Link
            href="/login"
            className="btn hover:bg-orange-500 text-white btn-primary bg-orange-600 border-none font-opensans"
          >
            Let&rsquo;s Explore
          </Link>
        </ScrollFade>
      </div>
    </div>
  );
};

export default Banner;
