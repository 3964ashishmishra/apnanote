import React, { useState, useContext } from 'react'
import NoteContext from '../context/notes/notecontext'

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", author: "default" })

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.author);
        setNote({title: "", description: "", author: ""});
    }

    const onHnadle = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="container">

                <h2 className="my-3" style={{ color: "gray" }}>Add Your Note Here:</h2>
                <div className="notes">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name="title"
                                onChange={onHnadle}
                                minLength={5}
                                required
                                placeholder="Enter Your Title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" name="description"
                                onChange={onHnadle}
                                minLength={5}
                                required
                                rows="6"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Author</label>
                            <input type="text" className="form-control" id="author" name="author"
                                onChange={onHnadle}
                                placeholder="Enter Author Name"
                                 />
                                             
                        </div>

                        <div className="col-auto">
                            <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-success my-2 mb-2" onClick={handleSubmit}>Add Note</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNote
