import { db } from "../firebase-config"
import { types } from "../types/types"
import { getList } from "./loadList"


export const createList = (info) => {
    return async(dispatch, getState) => {
        const doc = await db.collection(`osiris/list/notes`).add(info)
        dispatch(addListLocal(doc.id, info));
        dispatch(eventActive(doc.id, info));
    }
}

export const startLoadingNotes = () => {
    return async(dispatch) => {
        const list = await getList();

        dispatch(setList(list));
    }
}

export const startDeleting = (id) => {
    return async(dispatch) => {
        await db.doc(`osiris/list/notes/${id}`).delete();
        dispatch(deleteList(id))
    }

}

export const startUpdate = (list) => {
    return async(dispatch) => {
        const allList = {...list };
        delete allList.id
        await db.doc(`osiris/list/notes/${list.id}`).update(allList)
        dispatch(updateList(list.id, allList))
        dispatch(eventActive(list.id, allList))
    }

}

export const addListLocal = (id, list) => ({
    type: types.eventAddList,
    payload: { id, ...list }
})

export const eventActive = (id, list) => ({
    type: types.eventActiveList,
    payload: { id, ...list }
})

export const setList = (list) => ({
    type: types.eventSetList,
    payload: list
})
export const deleteList = (id) => ({
    type: types.eventDeleteList,
    payload: id

})

export const updateList = (id, list) => ({
    type: types.eventUpdateList,
    payload: {
        id,
        list: {
            id,
            ...list
        }
    }

})