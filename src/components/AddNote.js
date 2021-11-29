import React, { useContext } from 'react'
import { NoteContext } from '../context/notes/NoteContext';
import { TextField, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css"
import useInputState from "../hooks/useInputState"
import Navbar from "./Navbar";

function AddNote() {

    const { add } = useContext(NoteContext)
    const [title, updateTitle, resetTitle] = useInputState("")
    const [description, updateDescription, resetDescription] = useInputState("")
    const [tag, updateTag, resetTag] = useInputState("")
    const note = { title, description, tag }
    const navigate = useNavigate()
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(note)
        add(note)
        resetTitle()
        resetDescription()
        resetTag()
        navigate('/')
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-4 addnotes" >
                <Button className="mb-4" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>Home</Button>
                <h2 style={{ fontWeight: "Bold" }}>Create new Note</h2>
                <p className="mb-4">Add  a new note with your info / notes</p>
                <form onSubmit={handleSubmit}>
                    <div className="title mb-4">
                        <TextField value={title} onChange={updateTitle} inputProps={{minLength:3}} id="outlined-basic" color="secondary" label="Title" variant="outlined" fullWidth required minLength={3} style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }} />
                    </div>
                    <div className="description mb-4">
                        <TextField value={description} onChange={updateDescription} inputProps={{minLength:3}} id="outlined-basic" color="secondary" label="Description" variant="outlined" fullWidth required style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }} />
                    </div>
                    <div className="tags mb-4">
                        <TextField value={tag} onChange={updateTag} inputProps={{minLength:3}} id="outlined-basic" color="secondary" label="Tags" required variant="outlined" fullWidth />
                    </div>
                    <Button disabled={title.length < 3 || description.length < 3 || tag.length < 3 } type="submit" fullWidth size="large" className="mb-4" variant="contained" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>Add Note</Button>
                </form>
            </div>
        </div>
    )
}

export default AddNote