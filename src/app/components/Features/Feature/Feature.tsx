
type TFeature = {
    icon: React.ReactNode,
    title: string,
    description: string
}

const Feature = ({icon, title, description}: TFeature) => {
    return (
        <div className='border p-4 space-y-2 shadow-lg'>
            <p className='text-3xl text-gray-500'>{icon}</p>
            <h1 className='font-montserrat text-orange-600 text-lg md:text-3xl'>{title}</h1>
            <p className='font-opensans'>{description}</p>
        </div>
    );
};



export default Feature;