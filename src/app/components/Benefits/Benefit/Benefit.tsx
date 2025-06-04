
type TBenefit = {
    icon: React.ReactNode,
    title: string,
    description: string
}

const Benefit = ({icon, title, description}: TBenefit) => {
    return (
        <div className="space-y-3 font-montserrat flex flex-col items-center border p-6">
            <p className='text-3xl '>{icon}</p>
            <h3 className='text-2xl'>{title}</h3>
            <p>{description}</p>
            <button className="btn bg-orange-600 text-white ">Learn More</button>
        </div>
    );
};



export default Benefit;