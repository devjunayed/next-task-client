import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';

const SingleTask = ({ title, description, deadLine, priority }) => {
    return (
        <div className="border-4 p-4 hover:cursor-move">
            <div className="flex justify-end">
                <button className="btn text-white text-xl bg-green-600"><FaRegEdit /></button>
                <button className="btn text-white text-xl bg-red-600"><MdDelete /></button>
            </div>
            <h1 className="text-3xl font-semibold mt-4">{title}</h1>
            <p className="mt-2 min-h-24">{description}</p>
            <div className="flex items-center mt-4 justify-between ">
                <div>
                    <span className="text-lg text-left  text-gray-500">Deadline: {deadLine}</span>
                </div>
                <div className="">
                    {
                        priority === "High" &&
                        <span className="badge bg-green-700 p-4 text-white">High</span>
                    }
                    {
                        priority === "Moderate" &&
                        <span className="badge bg-yellow-500 p-4 text-white">Moderate</span>
                    }
                    {
                        priority === "Low" &&
                        <span className="badge bg-red-600 p-4 text-white">Low</span>
                    }
                </div>
            </div>
            <div className="mt-4">
                <button className=" btn uppercase hover:bg-green-800 w-full text-white bg-green-600">Start</button>
            </div>
        </div>
    );
};

SingleTask.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.string,
    deadLine: PropTypes.string,
}

export default SingleTask;