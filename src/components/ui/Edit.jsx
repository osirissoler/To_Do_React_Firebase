import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { startUpdate } from "../../actions/list";

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

const initEvent = {
    titulo: 'Hacer la tarea',
    contenido: 'Hacer la tarea Hacer la tarea Hacer la tarea Hacer la tarea',
    inicio: '2022-03-17',
    fin: '2022-03-23',
    completada: false
}

export const Edit = () => {
    const { active } = useSelector(state => state.lists)
    

    const [formValues, setFormValues] = useState(active)
    const { titulo, contenido, inicio, fin, completada, id } = formValues;
    
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        if (active) {
            setFormValues(active);
        } else {
            setFormValues(initEvent);
        }
    }, [active, setFormValues])

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,

        });
    }
    const handleInputChangeChecked = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.checked
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (titulo.trim() == ''){
            return Swal.fire('Error', 'El titulo es obligatorio', 'error');
        }
        else if(contenido.trim() == ''){
            return Swal.fire('Error', 'El contenido es obligatorio', 'error');
        }else if(inicio.trim() == ''){
            return Swal.fire('Error', 'La fecha de inicio es obligatorio', 'error');
        }else{
            dispatch( startUpdate({ titulo, contenido, inicio, fin, completada, id }))
            handleCloseModal()
        }

    }
    return (
        <>
            <button
                onClick={handleOpenModal}
                className="index_action mx-2 bg-primary"
            >
                <i className="fa-solid fa-pen"></i>
            </button>
            <Modal
                isOpen={openModal}
                className="modal"
                overlayClassName="modal-fondo"
                closeTimeoutMS={200}
                style={customStyles}>
            
                <div className='row justify-content-between mt-1'>
                    <h4 className='px-3'>Editar entrada</h4>
                    <div className='text-right'>
                        <button
                            className='bg-danger closeModal'
                            onClick={handleCloseModal}>X</button>
                    </div>

                </div>

                <form className="container" onSubmit={handleSubmitForm}>

                    <div className="form-group">
                        <label>Titulo.</label>
                        <input
                            type="text"
                            className='form-control '
                            placeholder="Título"
                            autoComplete="off"
                            name='titulo'
                        value={titulo}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <textarea
                            type="text"
                            className='form-control '
                            placeholder="Contenido"
                            autoComplete="off"
                            name='contenido'
                        value={contenido}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                    <label>Marcar o desmarcar como completada.</label>
                        <input type="checkbox"
                            name="completada" className="form-control"
                           
                            checked={completada}
                            onChange={handleInputChangeChecked}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha de inicio.</label>
                        <input
                            type="date"
                            className='form-control '
                            placeholder="Título"
                            autoComplete="off"
                            name='inicio'
                        value={inicio}
                        onChange={handleInputChange}

                        />
                    </div>

                    <div className="form-group">
                        <label>Fecha fin.</label>
                        <input
                            type="date"
                            className='form-control '
                            placeholder="Título"
                            autoComplete="off"
                            name='fin'
                        value={fin}
                        onChange={handleInputChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>

            </Modal>

        </>
    )
}