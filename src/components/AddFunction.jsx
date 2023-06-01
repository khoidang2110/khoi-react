import React from 'react'

function AddFunction() {
    const a=1234;
    const b=897;
    
    function splitIntoArray(num) {
        return Array.from(String(num), Number);
      }
      
      const arr1 = splitIntoArray(a);
      console.log(arr1); // [ 1, 2, 3, 4 ]
      
      const arr2 = splitIntoArray(b);
      console.log(arr2); // [  8, 9, 7 ]

      const element14 = arr1.pop()
      const element24 = arr2.pop()
      //const lastElement2 = arr2[arr2.length-1];
      console.log(element14); // "grapes"
      console.log(arr1)

  return (
    <div>
        <input type="text" /><br/>
        <input type="text" />
        <button>calculate</button>
    </div>
  )
}

export default AddFunction