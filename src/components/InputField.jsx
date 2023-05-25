import React, {useState} from 'react'

function InputField() {
    const [text, setText] = useState('');
  
    
    console.log(text)
  return (
    <div>
    <input  type="text" onChange = {text =>setText(text.target.value)}/>
    <p>Input text:{text}</p>
    <p>Text length: {text.length}</p>
  </div>
  )
}
// note: text.target.value
export default InputField


