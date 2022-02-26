import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeNote} from '../Action'

export default function Display(){
    const notes = useSelector(state => state.NoteReducer.notes);
    const dispatch = useDispatch();

    const renderNotes = () => {
        let mapRows;
        if(notes == []){
            mapRows = (
                <>
                    No Notes added yet
                </>
            )
        }
        else{
            mapRows = notes.map((note, index) =>(
                <div key={index} className = "display-container">
                    <div className="display-title-x">
                        <div className="display-title">{note.title}</div>
                        <button className="x" onClick={() => dispatch(removeNote(index))}>x</button>

                    </div>
                    <div>{note.content}</div>

                </div>
            ));
        }
        return mapRows;
    }

    return(
        <div>
            <div className="display-heading">
                All Notes
            </div>
            <div>
                {renderNotes()}
            </div>
        </div>
    )
}