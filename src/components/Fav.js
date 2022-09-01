import React, { useState , useEffect} from 'react'
import Form from './Form'
import '../form.css'
import Notes from './Notes'
import {useParams} from 'react-router-dom'

function Fav({idedit, editNote,keyid,edittNote, notes,addedNote,editing}) {
/*
  const[edittitle, seteditTitle] = useState('');
  const[editdescription, seteditDescription]= useState('nn');

  const newEditTitle =e =>{
    e.preventDefault();
    console.log("ovo je pre izmene naslova");
    console.log(editing);
   
    editing.title = e.target.value;
   
    console.log(editing);

}
const newEditDesc = e => {
    e.preventDefault();
    console.log("ovo je pre izmene opisa");
    console.log(editing);
    editing.description = e.target.value;
    
    console.log(editing);
}
const note ={
        
  id: Math.floor(Math.random()*10000),
  titlee: title,
  descriptionn: description

};

editing = note;

function niz() {
  const nova =[...notes].filter(note=>note.id ===idedit)
  console.log("ovo je nova iz niza po zadatom id");
  console.log(nova);
  editing = nova;
  console.log("ovo je editing");
  console.log(editing);
 // window.location.reload(true);
 //return( <Form editing ={editing} idedit={idedit} editNote={1}></Form>);

}*/
const {id}=useParams();
const[title, setTitle] = useState(id>0 ? id : 0);
const[nova, setNova] = useState({id:1, titlee:"prva", descriptionn:"prva"});
const[desc, setDesc] = useState('');
const nov="";
const novi=""
const pom="";

/*
useEffect(()=>{

  
 setNova(notes[id]);
console.log(nova);
  console.log(editing);
  console.log(id + " id");
  console.log(addedNote);

},[id,addedNote,editing])





const novi =notes.filter(note=>note.id ===setTitle(id))
console.log(novi);

const edi=notes.find(note=> {return note.id==={()=>setTitle(id)}});
console.log(edi);

const novi =notes.filter(note=>note.id ===title)
console.log(novi);




console.log("id iz urla " + id);
console.log(addedNote);
console.log(notes);
if(addedNote[2].id===id){setNova(addedNote[2]); console.log(nova); console.log(addedNote[2]);}else{
  console.log("nisu isti");
  console.log(addedNote[2].id+ " addedNote");
  console.log(id+ "id");
};

notes.forEach(note => {
 console.log(note.id + " note.id");
 console.log(id+ " id");

  
  
});
const edi=notes.filter(note=> {return note.id===id;});

console.log(edi);
console.log("nakon filter funkcije");

()
            
             {id===0? (console.log("nije veci od nule")): (
        console.log(title+" title u ret")
            
          )}*/
  return (
   <>
 
 <Form addedNote={notes[id]} key={id}  editNote
            ={1} edittNote={edittNote}/>
            
         
          
         
   </>
  )
}

export default Fav


/* {notes?.map((note)=>
           <Form idedit={idedit} note={notes[idedit]} editing={editing} editNote={1}></Form>
            
            (<Form addedNote={note} key={note.id} allNotes={1} deleteNote={deleteNote} edit={edit}/>
            
            ))} */

            /*
            {notes?.map((note)=>
             {note.id==idedit?
            (<Form idedit={idedit}  editing={note} editNote={1}></Form>)
            :(console.log(note.id +" a ovo je idedit" + idedit + editing.id + editing.title))}
            )}
          


             <div>
      <Form idedit={idedit} editing={editing} editNote={1}></Form>
    </div>
            <Form idedit={idedit} note={notes[idedit]} editing={[...notes].filter(note=>note.id ===idedit)} editNote={1}></Form>
            <Form editing ={editing} idedit={idedit} editNote={1}></Form>
            <button className='Add-button' onClick={niz}>Edit note</button>
           
           
              <> <div className='title'>

<input type='text' value={editing.title} onChange={newEditTitle} className='title-note'></input>

</div>

<div className='desscription'>
    <textarea type='text'  value={editing.description} onChange={newEditDesc} className=  'description-note'></textarea>
</div>
     <div className='button'>
     <button className='Add-button' >Edit note</button>
     </div>
     </>




     /////////////////////////////

      return (
   <>
  {notes.filter(note=> note.id===keyid).map((note)=>
          
            
          (<Form addedNote={note} key={note.id}  editNote
            ={1} />
          
          ))}
   </>
  )
           
           
           
            */