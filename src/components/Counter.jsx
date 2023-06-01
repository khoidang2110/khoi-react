import React,{useState,useEffect, useLayoutEffect} from 'react'

function Counter(props) {
 
    const [count,setCount]=useState(0);
    useEffect(() => {
      console.log('mounted');
  },[]);
useLayoutEffect(() => {
  console.log('mounted layout');
},[]);
  useEffect(() => {
    console.log(' updated');
},[count]);
  return (
    <>
    
 <button onClick={()=>setCount(count +1)}> +</button>
 <button onClick={()=>setCount(count -1)}> -</button>
    <div>Counter {count}</div>

    </>
   
  )
}

export default Counter