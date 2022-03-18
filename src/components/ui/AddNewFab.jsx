import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { createList, getList } from '../../actions/list';
import Swal from 'sweetalert2';

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
    titulo: '',
    contenido: '',
    inicio: '',
    fin: '',
    completada: false
}
Modal.setAppElement('#root');

export const AddNewFab = () => {

    const [openModal, setOpenModal] = useState(false)

    const [formValues, setFormValues] = useState(initEvent)
    const { titulo, contenido, inicio, fin, completada } = formValues;

    const dispatch = useDispatch();

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (titulo.trim() == '') {
            return Swal.fire('Error', 'El titulo es obligatorio', 'error');
        }
        else if (contenido.trim() == '') {
            return Swal.fire('Error', 'El contenido es obligatorio', 'error');
        } else if (inicio.trim() == '') {
            return Swal.fire('Error', 'La fecha de inicio es obligatorio', 'error');
        } else {
            dispatch(createList({ titulo, contenido, inicio, fin, completada }));
            setOpenModal(false)
            setFormValues(initEvent)
        }

    }

    return (
        <div>
            <Modal
                isOpen={openModal}
                onRequestClose={handleCloseModal}
                style={customStyles}
                closeTimeoutMS={200}
                className="modal"
                overlayClassName="modal-fondo"
            >
                <div className='row justify-content-between'>
                    <h4 className='px-3'>Agregar entrada</h4>
                    <div className='text-right'>
                        <button
                            className='bg-danger closeModal'
                            onClick={handleCloseModal}>X</button>
                    </div>

                </div>
                <form className="container" onSubmit={handleSubmitForm}
                >
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
                        <label>Descripcion.</label>
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
            <div className="text-center">
                <button className="icon bg-info text-white" onClick={handleOpenModal}>
                    <i className="fa-solid fa-calendar-plus"></i>
                </button>
                <div className='text-white'><b>Agregar</b></div>
            </div>
        </div>
    )
}