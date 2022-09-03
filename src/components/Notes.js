import React from 'react'

import Form from './Form'

const Notes = ({notes,edittNote, deleteNote, edit,editing,idedit, editNote}) => {
  return (
      <div className="container-all-notes">
          <h3>All notes</h3>
         <>
          {notes?.map((note)=>
          
            
            (<Form addedNote={note} edittNote={edittNote} key={note.id} keyid={note.id} allNotes={1} deleteNote={deleteNote} edit={edit}/>
            
            ))}
            </> 
            
      </div>
    
  )
}

export default Notes

