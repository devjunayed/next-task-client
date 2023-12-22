import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from "react-icons/io";

const AddTask = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    let subtitle;

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
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "70%"
        },
    };
    Modal.setAppElement(document.getElementById('root'));
    return (
        <div className="justify-end flex mt-4">
            <button onClick={openModal} className="btn bg-orange-600 hover:bg-orange-700 text-white">
                <p className="text-3xl"><CiCirclePlus /></p>New Task
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="flex justify-end">
                    <button className="text-red-600 text-5xl" onClick={closeModal}><IoIosCloseCircleOutline /></button>
                </div>
                <h2 className="text-3xl text-orange-600 text-center" ref={(_subtitle) => (subtitle = _subtitle)}>Create a Task</h2>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    );
};

export default AddTask;