import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate, Navigate} from "react-router-dom";
import Notes from './Notes';
import Fav from './Fav';

function Top() {
    const[notes, setNotes] = useState([{
        //id: Math.floor(Math.random()*10000),
        id:0,
        titlee: "prvi",
        descriptionn: "drugi"
   
    },
    {
        id:1,
        titlee: "nova",
        descriptionn: "novi"
   
    }
]);
    const[addedNote,setAdeddNote] = useState("");
    const[editNote,setEditNote] = useState("");
    const[keyid,setkeyid]=useState(0);
    const[idarr, setIdarr]=useState(0);
    const[counter, setCounter]=useState(2);

    const[editing, setEditing]=useState({
        id: Math.floor(Math.random()*10000),
        title: "prvi",
        description: "drugi"
   
    });
    const[idedit,setIdEdit]=useState("");
    function onAdd(note){
        console.log("Dodat je proizvod");
      
        const newNotes =[...notes, note];
        setCounter((prevState)=>prevState+1);
        console.log("Vrednost countera "+ counter);
        setAdeddNote(newNotes);
        setEditing(newNotes);
        setIdEdit(note.id);
        setNotes(newNotes);
        setEditNote(0);
    console.log(notes);
   

    }
    function deleteNote(id){
        const updatedNotes = [...notes].filter(note=>note.id !==id)
        setNotes(updatedNotes);
        setCounter((prevState)=>prevState-1);
        console.log("counter u delete "+counter);
       updatedNotes.forEach(note => {
            if(note.id > id){
                note.id=note.id-1;
                setIdarr((prevState)=>prevState+1);
            }
        });
        //setIdarr(0);
    }
    function edittNote(id,updateNote){
        const newNo=notes.map((note)=>note.id===id? updateNote : note);
        setNotes(newNo);
        
    }

    function setIdArray(){
       
        notes.forEach(note=>{
           // note.id=idarr;
            setIdarr((prevState)=>prevState+1);
            console.log("u foreach idarr "+idarr);
        });
        setIdarr(0);
        
    }
    function edit(id){
        setEditing(notes[id]);
        setIdEdit(id);
    }
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/"

    element={<Form keyid={keyid} edittNote={edittNote} counter={counter} setkeyid={setkeyid} addedNote={addedNote} notes={notes} onAdd={onAdd} deleteNote={deleteNote} edit={edit} idedit={idedit} editing={editing} setEditNote={setEditNote} editNode={editNote}></Form>}/>
    <Route path="/notes" element={<Notes setkeyid={setkeyid} notes={notes} deleteNote={deleteNote} idedit={idedit} editing={editing}  editNote={editNote}></Notes>}></Route>
    <Route path="/fav/:id" element={<Fav keyid={keyid} edittNote={edittNote} addedNote={addedNote} editing={editing}  notes={notes} idedit={idedit} editNote={editNote}  ></Fav>}></Route>

    </Routes>
   
    </BrowserRouter>
    
  )
}

export default Top