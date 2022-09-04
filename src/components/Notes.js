import React from 'react'

import Form from './Form'

const Notes = ({notes,edittNote, deleteNote, edit}) => {
  return (
      <div className="container-all-notes">
          
         <>
          {notes?.map((note)=>
          
            
            (<Form addedNote={note} edittNote={edittNote} key={note.id} keyid={note.id} allNotes={1} deleteNote={deleteNote} edit={edit}/>
            
            ))}
            </> 
            
      </div>
    
  )
}

export default Notes

