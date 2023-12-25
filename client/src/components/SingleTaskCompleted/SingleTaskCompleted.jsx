import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../providers/AuthProviders";


const SingleTaskCompleted = ({ refetch, refetchOnGoing, userId, id, title, description, deadLine, priority }) => {
    const publicAxios = useAxios();
    const { user } = useContext(AuthContext);
    const [modalIsOpen, setIsOpen] = useState(false);



    const handleDelete = (id) => {
        publicAxios.delete(`/completed/${id}`)
            .then(res => {
                if (res.data.deletedCount >= 1) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Task Deleted`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                    refetch();
                }
            })
    }

    const handleStart = () => {

        publicAxios.delete(`/todo/${id}`)
            .then(res => {
                console.log(res);
                if (res.data.deletedCount >= 1) {

                    const todoData = {
                        _id: id,
                        title,
                        description,
                        deadLine,
                        priority,
                        userId,
                    }
                    publicAxios.post("/ongoing", todoData)
                        .then(res => {
                            if (res.data.acknowledged) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: `Task moved to ongoing`,
                                    showConfirmButton: false,
                                    timer: 2500
                                });
                                refetch();
                                refetchOnGoing();

                            }
                        }).catch(err => console.log(err));



                }
            }).catch(err => console.log(err));
    }




    let subtitle;
    const {
        register,
        handleSubmit,
        reset
    } = useForm();


    const onSubmit = data => {
        data.userId = user.uid;
        publicAxios.patch(`/todo/${id}`, data)
            .then((res) => {
                console.log(res);
                if (res.data.acknowledged) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your task has been updated",
                        showConfirmButton: false,
                        timer: 2500
                    });
                    refetch();
                    reset();
                    closeModal();
                }
            })
            .catch(err => console.log(err));

    };
    function openModal() {
        setIsOpen(true);

    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement(document.getElementById('root'));
    return (
        <div className="border-4 p-4 hover:cursor-move bg-white">
            <div className="flex justify-end gap-2">
                <button onClick={openModal} disabled={true} className="btn text-white text-xl bg-green-600"><FaRegEdit /></button>
                <button onClick={() => handleDelete(id)} className="btn text-white text-xl bg-red-600"><MdDelete /></button>
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
                <button onClick={handleStart} className=" btn uppercase hover:bg-green-800 w-full text-white bg-green-600" disabled={true}>Completed</button>
            </div>

            {/* modal  */}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                // style={customStyles}
                className="shadow-xl w-full md:w-1/2 top-1/2 absolute translate-x-1/2 p-6 -translate-y-1/2 right-1/2 bg-white"
                contentLabel="Example Modal"
            >
                <div className="flex justify-end">
                    <button className="text-red-600 text-4xl md:text-5xl" onClick={closeModal}><IoIosCloseCircleOutline /></button>
                </div>
                <h2 className="text-3xl text-orange-600 text-center" ref={(_subtitle) => (subtitle = _subtitle)}>Update Task</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white  p-4 md:p-10 font-opensans">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input defaultValue={title} {...register("title")} type="text" placeholder="title here...." className="w-full input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input defaultValue={description} {...register("description")} type="text" placeholder="descripton here..." className="w-full input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input defaultValue={deadLine} {...register("deadLine")} type="date" placeholder="Enter deadline" className="w-full input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select defaultValue={priority} className="input input-bordered w-full" required  {...register("priority")}>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn uppercase btn-primary hover:bg-orange-500 bg-orange-600 border-none text-white" disabled={true}>Update Task</button>
                    </div>

                </form>
            </Modal>
        </div>
    );
};

SingleTaskCompleted.propTypes = {
    refetchOnGoing: PropTypes.func,
    refetch: PropTypes.func,
    id: PropTypes.string,
    userId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.string,
    deadLine: PropTypes.string,
}

export default SingleTaskCompleted;