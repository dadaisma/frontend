import { useEffect, useState } from "react";
import ToDo from "./components/Todo";
//import {getAllToDo, addToDo, updateToDo, deleteToDo} from "./utils/HandleApi";
import {getAllToDo, addToDo, updateToDo, deleteToDo} from "./utils/HandleApiFetch";


function App() {
  const [toDo, setToDo] = useState([])
  //input start empty
  const [text, setText] = useState("")
const [isUpdating, setIsUpdating] = useState(false)
const [toDoId, setToDoId] = useState("")



useEffect(() => {
   getAllToDo(setToDo)
}, [])

const updateMode = (_id, text) => {
  setIsUpdating(true)
  setText(text)
  setToDoId(_id)
}
  
  return (
    <div className="App">
   <div className="container">
    
    <h1>Todo App</h1>
    <div className="top">
      
      <input 
      type="text" 
      placeholder="add a todo"
      //give a value to text
      value={text}
      //will take what we input (e) element updating the state with setText
      onChange={(e)=>setText(e.target.value)}
      />

<div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating, isUpdating)
              : () => addToDo(text, setText, setToDo, setIsUpdating, isUpdating)}>
            {isUpdating ? "Update" : "Add"}
          </div>

    </div>

    <div className="list">

{toDo.map((item) => <ToDo 
key={item.id} 
text={item.text}
updateMode = {() => updateMode(item._id, item.text)}
deleteToDo = {() => deleteToDo(item._id, setToDo)} 
/>)}

{/* {toDo && toDo.map((item) => <ToDo key={item._id} item={item} />)} */}


</div>
    </div> 

     
    </div>
  );
}

export default App;
