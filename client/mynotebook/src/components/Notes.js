import React, { useContext, useEffect,useRef,useState } from 'react'
import NoteContext from '../context/notes/notecontext'
import {useHistory} from 'react-router-dom'

import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNote,editNote } = context;
    const history = useHistory();

    useEffect(() => {
       
       if(localStorage.getItem('token')){
        getNote();
       }
        else{
            history.push("/login")
        }
       // eslint-disable-next-line react-hooks/exhaustive-deps 

    }, [])

    
    const [note, setNote] = useState({ id:"", etitle: "", edescription: "", eauthor: "default" })

    const ref = useRef(null)
    const refclose = useRef(null)

    
    const updatenote = (currentnote) => {
        ref.current.click();
        setNote({id:currentnote._id, etitle: currentnote.title,edescription: currentnote.description, eauthor: currentnote.author})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.eauthor);
        refclose.current.click();
    }

    const onHnadle = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    


    return (
        <>

            <button  ref={ref}   type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Your Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label htmlFor="etitle" className="form-label">Title</label>
                            <input type="text" className="form-control" id="etitle" name="etitle"
                                value={note.etitle}
                                onChange={onHnadle}
                                placeholder="Enter Your Title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="edescription" className="form-label">Description</label>
                            <textarea className="form-control" id="edescription" name="edescription"
                                value={note.edescription}
                                onChange={onHnadle}
                                rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="eauthor" className="form-label">Author</label>
                            <input type="text" className="form-control" id="eauthor" name="eauthor"
                                value={note.eauthor}
                                onChange={onHnadle}
                                placeholder="Enter Author Name" />
                        </div>
                    </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Edit Note</button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="row my-3" >
                <h2 className="text-gray" style={{ color: "gray" }}>Your Notes:</h2>
                <div className="container " style={{ fontWeight: "bold", fontSize: "20px"}} >
                {notes.length===0 && "No Notes available"}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updatenote={updatenote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
