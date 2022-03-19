import { db } from "../firebase-config";
import moment from 'moment';

export const getList = async() => {

    const notesSnap = await db.collection('osiris/list/notes').get()
    const notes = [];

    notesSnap.forEach(snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })
    return notes;
}