import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startLoadingNotes } from "../../actions/list"

import { AddNewFab } from "../ui/AddNewFab"
import { Delete } from "../ui/Delete"
import { Edit } from "../ui/Edit"
import { Header } from "./Header"
import { ItemsScreen } from "./ItemsScreen"



export const TodoScreen = () => {

    const dispatch = useDispatch();

    const { contents } = useSelector(state => state.lists)
    const { active } = useSelector(state => state.lists)

    const [toComplete, setToComplete] = useState(false)

    useEffect(() => {
        if (active?.completada) {
            setToComplete(true)
        } else {
            setToComplete(false)
        }

    }, [active])

    useEffect(() => {
        dispatch(startLoadingNotes())
    }, [dispatch])



    return (
        <>
            <Header />
            <div className="index_sidebar">
                {(active)
                    ? <div className="index_body px-5 py-4">
                        <div>
                            <h1>{active.titulo}</h1>
                            {active.tituto}
                            <p><b>{active.contenido}</b></p>
                            <hr />
                            <b>{active.completada}</b>

                        </div>
                        <div className="index_completed">
                            {(active.completada) ? <h6> Completada</h6> : <h6>No completada </h6>
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
                            <i class="fa-solid fa-arrow-right-long icon_delete text"></i>
                        </div>
                    </div>}


                <div className="index_sidebarContenc">
                    <div className="index_add">
                    <AddNewFab />
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