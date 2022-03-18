import { db } from "../firebase-config";

export const getList = async () => {

    const notesSnap = await db.collection('osiris/list/notes').get()
    const notes = [];

    notesSnap.forEach(snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });


    return notes;
}