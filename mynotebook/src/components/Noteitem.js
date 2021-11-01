import React,{useContext} from 'react'
import NoteContext from '../context/notes/notecontext'


const Noteitem = (props) => {

    const context = useContext(NoteContext);
    const {deleteNote} = context;
    const { note,updatenote} = props;
    
    
    return (
        <>  
            
              <div className="col-md-6 my-5" style={{height: "5rem"}}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{note.title}</h5>
                            <p className="card-text">{note.description}</p>
                            <p className="card-text">Author: {note.author}</p>
                            <i className="far fa-edit mx-2" onClick={() =>{updatenote(note)}} ></i>
                            <i className="far fa-trash-alt mx-2" onClick={() =>{deleteNote(note._id)}}></i>
                        </div>
                    </div>
                </div>
                            
        
        </>
    )
}

export default Noteitem
