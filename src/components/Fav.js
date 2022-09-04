
import Form from './Form'
import '../form.css'

import {useParams} from 'react-router-dom'

function Fav({edittNote, notes}) {

const {id}=useParams();


  return (
   <>
 
 <Form addedNote={notes[id]} key={id}  editNote
            ={1} edittNote={edittNote}/>
            
         
          
         
   </>
  )
}

export default Fav


