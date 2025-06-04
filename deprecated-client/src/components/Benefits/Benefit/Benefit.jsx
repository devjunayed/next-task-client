
const Benefit = ({icon, title, description}) => {
    return (
        <div className="space-y-3 font-montserrat flex flex-col items-center border p-6">
            <p className='text-3xl '>{icon}</p>
            <h3 className='text-2xl'>{title}</h3>
            <p>{description}</p>
            <button className="btn bg-orange-600 text-white ">Learn More</button>
        </div>
    );
};


Benefit.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Benefit;