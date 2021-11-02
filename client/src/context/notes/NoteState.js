import NoteContext from "./notecontext";
import React, { useState } from "react";


const NoteState = (props) => {

  // const host = "http://localhost:8000"

  const initialNotes = []

  const [notes, setNotes] = useState(initialNotes);


  // Fetch all notes
  // Adding a notes
  const getNote = async () => {

    const response = await fetch('/notes/fetchnotes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

    });
    const json =await response.json(); 
    setNotes(json)
  }

  // Adding a notes
  const addNote = async (title, description, author) => {

    const response = await fetch("/notes/addnotes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

      body: JSON.stringify({title,description,author})
    });
    const note = await response.json();
    setNotes(notes.concat(note))
    window.alert("Your noted add successfully")
  
  }


  // Deleting Notes

  const deleteNote = async (id) => {

    
    if (window.confirm("Are You sure you want to delete this note")) {
      const response = await fetch(`/notes/deletenotes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
  
      });
      await response.json();
     
      // console.log('Deleting the note of id' + id);
      const newNote = notes.filter((notes) => { return notes._id !== id });
      setNotes(newNote)
    } else {
       window.alert("I am not deleting your notes")
    }
    
  }


  // Editing a notes

  const editNote = async (id, title, description, author) => {


    const response = await fetch(`/notes/updatenotes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

      body: JSON.stringify({title,description,author})
    });
    await response.json();
    // response.send(json)

    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];

      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].author = author;
        break;
      }
    }
    setNotes(newNotes);


  }


  return (
    <NoteContext.Provider value={{ addNote,editNote,deleteNote,getNote,notes}}>
      {props.children}
    </NoteContext.Provider>
  )


}

export default NoteState;


