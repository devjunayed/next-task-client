import { useContext, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from 'react-hook-form';
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";



const AddTask = () => {
    const { user } = useContext(AuthContext);
    const userId = user.uid;
    const [modalIsOpen, setIsOpen] = useState(false);
    const publicAxios = useAxios();

    const {  refetch: refetchTodoTask} = useQuery({
        queryKey: [userId, "todoTask", undefined],
        queryFn: async () => {
          const res = await publicAxios.get(`/todo/${userId}`);
          return res.data;
        }
      });
    

    let subtitle;
    const {
        register,
        handleSubmit,
        reset
    } = useForm();


    const onSubmit = data => {
        data.userId = user.uid;
        publicAxios.post("/create-task", data)
            .then((res) => {
                console.log(res);
                if (res.data.acknowledged) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your task has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetchTodoTask();
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
        <div className="justify-center my-4 md:justify-end flex">
            <button onClick={openModal} className="btn bg-orange-600 hover:bg-orange-700 text-white">
                <p className="text-3xl"><CiCirclePlus /></p>New Task
            </button>

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
                <h2 className="text-3xl text-orange-600 text-center" ref={(_subtitle) => (subtitle = _subtitle)}>Create a Task</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white  p-4 md:p-10 font-opensans">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input {...register("title")} type="text" placeholder="title here...." className="w-full input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input {...register("description")} type="text" placeholder="descripton here..." className="w-full input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input {...register("deadLine")} type="date" placeholder="Enter deadline" className="w-full input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select defaultValue={"High"} className="input input-bordered w-full" required  {...register("priority")}>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn uppercase btn-primary hover:bg-orange-500 bg-orange-600 border-none text-white">Create Task</button>
                    </div>

                </form>
            </Modal>
        </div>
    );
};

export default AddTask;