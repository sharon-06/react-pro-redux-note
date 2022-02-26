import {ADD} from './Action';
import {REMOVE} from './Action';

const initialState ={
    notes: []
}

export default function NoteReducer(state = initialState, action){

    switch(action.type){
        case ADD:
            return{
                notes:[...state.notes,
                {
                    title: action.title,
                    content: action.content
                }]
            }

        case REMOVE:
            return{
                notes: state.notes.filter((note,index) => index !== action.id)
            };

        default:
            return state;
    }
}