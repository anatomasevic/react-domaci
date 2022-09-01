import React from 'react'
import Fav from './Fav'
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

/*
 {{editNote}===1?(<>

  <Form editing ={editing} idedit={idedit} editNote={1}></Form>
  </> ):(
    )}



{notes?.map((note)=>
            { note.id === id ?  (<Form addedNote={note} key={note.id} editNotes={1} deleteNote={deleteNote}/>
            ):(<Form addedNote={note} key={note.id} allNotes={1} deleteNote={deleteNote}/>
            )}
                  )}*/ 


/*
          {notes?.map((note)=>
           (<Form addedNote={note} key={note.id} allNotes={1} deleteNote={deleteNote}/>
            
                  ))}*/ 