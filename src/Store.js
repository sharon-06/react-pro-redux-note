import NoteReducer from './Reducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    NoteReducer:NoteReducer
})

export default rootReducer;