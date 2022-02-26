import React from 'react'
import { useDispatch } from 'react-redux'
import {addNote} from '../Action';

export default function Form(){
    const dispatch = useDispatch();

    const FormSubmit = (e) =>{
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        dispatch(addNote(title, content));
        e.target.title.value =  e.target.content.value = '';
    }

    return(
        <>
        <div className="form-container">
            <div className="form-heading">
                Add Note
            </div>
            <form className="form" onSubmit={(e) => FormSubmit(e)}>
                <label className="form-label">Title :</label>
                <input type="text" name="title"/>
                <label className="form-label">Content :</label>
                <input type="text" className="form-content" name="content"/>
                <button type="submit" className="form-button">Add Note</button>
            </form>
        </div>
        <hr className="line"/>
        </>
    )
}