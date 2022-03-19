import { useDispatch } from "react-redux";
import { eventActive } from "../../actions/list";
import moment from 'moment';


export const ItemsScreen = ({ id, contenido, titulo, inicio, fin, completada }) => {

    const dispatch = useDispatch();


    const selectList = () => {
        dispatch(eventActive(id, { contenido, titulo, inicio, fin, completada }))
    }
    return (
        <div >
            <div className="card my-1 mx-1 " onClick={selectList}>
                <div className="card-body">
                    <h5 className="card-titulo " ><b>{titulo}</b></h5>
                    <div className="card-contenido ">
                        <div>{contenido}</div>
                    </div>
                </div>
                <small className="text-right my-2 mx-2 text-muted">
                    {moment(inicio).format('MMMM Do YYYY')}  - {fin?  moment(fin).format('MMMM Do YYYY') :'No especificada'}
                </small>
            </div>
        </div>
    )
}