//shortcut "rafce" will create automatically the function

import React from 'react'

//install and import icons // npm i react-icons
import {  BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import CheckIt from './checkbox'

//import {Checkbox} from "./components/checkbox"





const ToDo = ({text, done, updateMode, deleteToDo, priority, checkbox}) => {
    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="text">{priority}</div>
            
            {/* <BiCheckCircle onClick={go=>{console.log('yo')}}>{done}</BiCheckCircle> */}
            
            <div className="icons">
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteToDo} />
            </div>
            
        </div>
       
    )
}

export default ToDo