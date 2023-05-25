import React,{useState} from 'react'

function UpdatingObject() {
    const [messageObj,setMessageObj]= useState({message:''})
  return (
    <div>
        <input 
        type="text"
        value={messageObj.message}
        onChange={event=>{
            // messageObj.message=event.target.value;
            // setMessageObj(messageObj);
            const newMessageObj = {message:event.target.value};
            setMessageObj(newMessageObj);
        }}
         />
    </div>
  )
}

export default UpdatingObject