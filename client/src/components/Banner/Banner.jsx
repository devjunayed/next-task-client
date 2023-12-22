import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner.svg';

const Banner = () => {
    return (
        <div className="hero md:min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="w-2/3 md:max-w-lg rounded-lg" />
                <div>
                    <h1 className="w-full text-2xl lg:text-5xl font-bold">Next Task Elvate Your Productivity</h1>
                    <p className="py-6">Effortless task management for teams, bringing clarity and efficiency to your projects.</p>
                    <Link to="/login" className="btn btn-primary bg-orange-600 border-none">Let&rsquo;s Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;