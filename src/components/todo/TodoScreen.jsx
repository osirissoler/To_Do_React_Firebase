import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startLoadingNotes } from "../../actions/list"
import moment from 'moment';
import { AddNewFab } from "../ui/AddNewFab"
import { Delete } from "../ui/Delete"
import { Edit } from "../ui/Edit"
import { Header } from "./Header"
import { ItemsScreen } from "./ItemsScreen"


// const initDate = moment(inicio)
//     const finDate = moment(fin)

export const TodoScreen = () => {

    const dispatch = useDispatch();

    const { contents } = useSelector(state => state.lists)
    const { active } = useSelector(state => state.lists)

    // const [toComplete, setToComplete] = useState(false)

    // useEffect(() => {
    //     if (active?.completada) {
    //         setToComplete(true)
    //     } else {
    //         setToComplete(false)
    //     }
    // }, [active])


    useEffect(() => {
        dispatch(startLoadingNotes())
    }, [dispatch])



    return (
        <>
            <Header />
            
            
            <div className="index_sidebar">
                {(active)
                    ? <div className="index_body">
                        <div>
                            <div className="text-right mx-2">
                                <small> {moment(active.inicio).format('MMMM Do YYYY')} - {active.fin?  moment(active.fin).format('MMMM Do YYYY') :'No especificada'}</small> 
                            </div>
                            <div className="px-5 py-4">
                                <div className="titulo" >
                                    <h3>{active.titulo}</h3>
                                </div>

                                <div className="contenido  " >
                                    <p >{active.contenido}</p>
                                </div>
                            </div>

                        </div>
                        <div className="index_completed  px-5">
                            {(active.completada)
                                ? <div className="row align-items-center ">
                                    <div className="enable_disable border mx-1 bg-success"></div>
                                    <div> <b>Completada</b></div>
                                </div>
                                : <div className="row align-items-center ">
                                    <div className="enable_disable border mx-1 bg-danger"></div>
                                    <div> <b>No completada</b></div>
                                </div>
                            }

                        </div>
                        <div className="index_actions text-right" >
                            <Delete />

                            <Edit />
                        </div>
                    </div>
                    : <div className="index_select row align-items-center justify-content-center">
                        <div className="text-center">
                            <h5 >
                                Seleciona una entrada
                                o crea una nueva entrada.
                            </h5>
                            <AddNewFab classValue="text-dark"/>
                          
                        </div>
                    </div>}


                <div className="index_sidebarContenc">
                    <div className="index_add">
                        <AddNewFab  classValue="text-white"/>
                    </div>
                    <div className="items">
                        {contents.map((items) => (
                            <ItemsScreen key={items.id} {...items} />
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}