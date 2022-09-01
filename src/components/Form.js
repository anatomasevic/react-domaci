import React, { useState, useEffect } from 'react'
import '../form.css'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import {useNavigate, Link} from "react-router-dom";


function Form({addedNote,edittNote,counter,notes,keyid,setkeyid, onAdd, allNotes,setEditNote,editNote, idedit,editing, deleteNote}) {
    const[title, setTitle] = useState('');
    const navigate = useNavigate();
    const[edittitle, seteditTitle] = useState(addedNote.titlee || addedNote.edittitle);
    const[editdescription, seteditDescription]= useState(addedNote.descriptionn || addedNote.editdescription);
   const[editMode, setEdit] = useState('');
    const[description, setDescription]= useState('');
    const[note1, setNote1]=useState('');
    const id = addedNote.id;
    const updateNote ={id, edittitle, editdescription};
    //const[addedTitle, setAddedTitle] = useState('');
   // const[addedDesc, setAddedDesc]= useState('');
   
   /* const[notes, setNotes] = useState([{
        id: Math.floor(Math.random()*10000),
        titlee: "prvi",
        descriptionn: "drugi"
   
    }]);


*/


useEffect(()=>{

  

   // console.log(editing);
    
   // console.log(addedNote);
  
  },[addedNote,editing])

    

    const handleSubmit = e =>{
       
        e.preventDefault();

        const note ={
        
            //id: Math.floor(Math.random()*10000),
            id:counter,
            titlee: title,
            descriptionn: description
       
        };
        addedNote=note;
        editing = addedNote;
        
        
        //setAddedTitle(addedNote.titlee);
        //setAddedDesc(addedNote.descriptionn);
        console.log("ovo je dodata note");
        console.log("editNote vrednost " + editNote);
        idedit=addedNote.id;
        console.log("editNote vrednost za idedit " + idedit);
        seteditTitle(note);
        console.log("ovo je edit");
        console.log(edittitle);
        
        console.log(editing);
        console.log(addedNote.id);
        seteditDescription(editing.description);
        console.log("ovo je postavljeno polje za edit");
        console.log(editdescription);
        onAdd(note);
       /* console.log(note);
      
       
        console.log(title);
        console.log(description);
        */
        //console.log(notes);
        //seteditTitle(addedNote);
        seteditDescription(addedNote.descriptionn);
        setTitle('');
        setDescription('');
        console.log(edittitle);
        console.log("edit "+ editdescription);
         
      

       
       
    };
    const newEditTitle =e =>{
       /// e.preventDefault();
        console.log("ovo je pre izmene naslova");
        console.log(addedNote);
       
        addedNote.titlee = e.target.value;
       
        console.log(addedNote);

    }
    const newEditDesc = e => {
        //e.preventDefault();
        console.log("ovo je pre izmene opisa");
        console.log(addedNote);
        addedNote.descriptionn = e.target.value;
        
        console.log(addedNote);
    }

    function dele(id){
        console.log("delete funkcija"+ id);
        //const newNotes=notes;
        //console.log(newNotes);
        deleteNote(id);
    }
    
    const edi = e =>{
       
        e.preventDefault();
        const note1={
            id:addedNote.id,
            title:addedNote.titlee,
            description:addedNote.descriptionn
        }
       editing=note1;
    }

    function editt(key){
        idedit=addedNote.id;
        console.log("ovo je idedit "+idedit);
        const note1={
            id:addedNote.id,
            title:addedNote.titlee,
            description:addedNote.descriptionn
        }
       editing=note1;
       console.log(editing.id);
       console.log(key);
       console.log(editing.title);
       console.log(editing.description);
       seteditTitle({id:addedNote.id,title:"novo 1",description:"novo 2"});
       seteditDescription("novo desc");
       console.log(editdescription);
       console.log( edittitle.title);
       console.log(edittitle.description);
    
    }

    const proba=e =>{
       /* const note1={
            id:addedNote.id,
            title:edittitle.title,
            description:edittitle.description
        }
        seteditTitle(note1);
        console.log("nakon izmene");
        console.log(edittitle.id);
        console.log(edittitle.title);
        console.log(edittitle.description);
        console.log(editing.title);
        console.log(editing.description);*/
       // console.log("dugme edit");
       e.preventDefault();
       edittNote(id, updateNote);
       console.log("dugme edit ");
       console.log(updateNote);
    }
    const navigateFav = ()=>{
        editing=addedNote;
        console.log(addedNote);
        console.log("najnovije");
        editNote = 1;
       

        console.log(keyid + " ovo je vrednost editNota nakon sto se klikne dugme za update")
        

        console.log("navigateFunktion onde je " +idedit);
        console.log(editing);
        //navigate('/fav');
        navigate('/fav/'+keyid);
       //<Link to = {'/fav/'+{keyid}}></Link>
    }

    

  return (
    
    <div className={allNotes===1 ?'wraper-all':'wrapper'}>
        {allNotes ===1?(<> <div className='title2'>

    <input type='text'  value= {addedNote.titlee || addedNote.edittitle} onChange={newEditTitle} className='title-note-all'></input>

    </div>

    <div className='desscription2'>
    <textarea type='text'  value={addedNote.descriptionn || addedNote.editdescription} onChange={newEditDesc} className= 'description-note-all' ></textarea>
    </div>
    <div className='icons'>
    
    
    
     <TiEdit

     className='edit-icon'
     /*onClick={()=> editt(addedNote.id)}*/
     onClick={navigateFav}

     
     />
     
    
   
        
       
        
        <RiCloseCircleLine 
        className='delete-icon' onClick={()=>dele(addedNote.id)}/>
       
    </div>
    </>
    
 ) : 
        
        
        (<>{editNote===1?(<> <div className='title'>

<input type='text' value={edittitle}  onChange={(e)=>seteditTitle(e.target.value)} className='title-note'></input>

</div>

<div className='desscription'>
    <textarea type='text'  value={editdescription} onChange={(e)=>seteditDescription(e.target.value)} className=  'description-note'></textarea>
</div>
     <div className='button'>
     <button className='Add-button' onClick={proba}>Edit note</button>
     </div>
     </>
     ):(
        <> <div className='title'>

<input type='text' placeholder ='Add tiitle...' value= {title} onChange={(e)=>setTitle(e.target.value)} className='title-note'></input>

</div>

<div className='desscription'>
    <textarea type='text' placeholder='Add description...' value={description} onChange={(e)=>setDescription(e.target.value)} className=  'description-note'></textarea>
</div>
     <div className='button'>
     <button className='Add-button' onClick={handleSubmit}>Add note</button>
     </div>
     </>
     )}</>)}
       
  


    </div>
  

    
  )
}

export default Form