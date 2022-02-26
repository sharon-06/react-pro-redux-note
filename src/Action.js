export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

// for adding title and content to add note
export function addNote(title, content){
    console.log('action', title, content);
    return{
        type: ADD,
        title:title,
        content:content
    }
}

//delete notes of particular id from All notes
export function removeNote(id){
    return{
        type:REMOVE,
        id:id,
    }
}