import { useDispatch } from "react-redux";
import { eventActive } from "../../actions/list";


export const ItemsScreen = ({ id, contenido, titulo, inicio, fin, completada }) => {

    const dispatch = useDispatch();

    const selectList = () => {
        dispatch(eventActive(id, { contenido, titulo, inicio, fin, completada }))
    }
    return (
        <div >
            <div className="card my-1 mx-1 " onClick={selectList}>
                <div className="card-body">
                    <h5 className="text-center"><b>{titulo}</b></h5>
                    <div className="span">{contenido}</div>
                </div>
                <div className="text-right mx-1 text-muted">
                    ({inicio})  - ({fin})
                </div>
            </div>
        </div>
    )
}