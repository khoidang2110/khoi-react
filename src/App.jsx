import { useState } from 'react'
import './App.css'

// components
import Comment from './components/Comment'
import Counter from './components/Counter'
import InputField from './components/InputField'
import ShowHide from './components/ShowHide'
import ToDoList from './components/ToDoList'
import Greeting from './components/Greeting'
import GenerateBoxes from './components/GenerateBoxes'
import UpdatingObject from './components/UpdatingObject'
import HookLifecycle from './components/HookLifecycle'
import StateHook from './components/StateHook'
import BoxColor from './components/Boxcolor'
import AddFunction from './components/AddFunction'

// pages
import Dasbhoard from './pages/Dashboard/Dasbhoard'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    {/* <Comment/> */}
    {/* <Counter/> */}
    {/* <InputField/> */}
   {/* <ShowHide/> */}
    {/* <ToDoList/> */}
    {/* <Greeting  /> */}
    <GenerateBoxes/>
    {/* <UpdatingObject/> */}

    {/* <HookLifecycle/> */}

    {/* <StateHook/> */}
    <BoxColor/>
    {/* <AddFunction/> */}
    
    </>
  )
}

export default App
