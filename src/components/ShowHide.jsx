import React,{useState} from 'react'

function ShowHide() {
   const [show,setShow]=useState(true)
   
  return (
    <div>
    <button onClick= {()=> setShow(!show)}>{show?"Hide":"Show"} Text</button>
    {
        show && <div>show </div>
    }
  </div>
  )
}

export default ShowHide


