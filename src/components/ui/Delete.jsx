import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import { useState } from "react";
import { startDeleting } from "../../actions/list";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export const Delete = () => {

    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false)

    const { active } = useSelector(state => state.lists)
    

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const handleDeleteList = () => {
        dispatch(startDeleting(active.id))
    }

    return (
        <>
            <button
                onClick={handleOpenModal}
                className="index_action mx-2 bg-danger"
            >
                <i className="fa-solid fa-trash"></i>
            </button>
            <Modal
                isOpen={openModal}
                className="modal"
                overlayClassName="modal-fondo"
                closeTimeoutMS={200}
                style={customStyles}
            >
                <div className='text-right'>
                    <button
                        className='bg-danger closeModal'
                        onClick={handleCloseModal}>X</button>
                </div>
                <div className="text-center">
                    <i className="fa-solid fa-trash icon_modal_delete text-danger icon_delete" ></i>
                </div>
                <div className="text-center my-4"> <h5>Esta seguro que quiere eliminar esto.</h5></div>

                {/* <div>{active}</div> */}
                <div className="text-center mt-4">
                    <button
                        className='btn btn-outline-primary mx-2'
                        onClick={handleDeleteList}><i className="fa-solid fa-trash  text-danger px-2 " ></i>Ok</button>
                        <button
                        className='btn btn-outline-primary'
                        onClick={handleCloseModal}><i className="fa-solid fa-xmark px-2 text-danger"></i>Cancel</button>
                </div>

            </Modal>
        </>
    )

}