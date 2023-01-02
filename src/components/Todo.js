//shortcut "rafce" will create automatically the function

import React from 'react'

//install and import icons // npm i react-icons
import {  BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import { BiCheckCircle } from 'react-icons/bi'
import CheckIt from './checkbox'
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers'

//import {Checkbox} from "./components/checkbox"





const ToDo = ({text, done, updateMode, deleteToDo, priority, fecha}) => {
    return (
        <div className="todo">
            <div className="text">{text}</div>
            {/* <div className="text">Priority: {priority}</div> */}
            <div>{done}</div>
            <div>{fecha}</div>
            {/* <BiCheckCircle onClick={go=>{console.log('yo')}}>
            </BiCheckCircle> */}
            
            <div className="icons">
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteToDo} />
            </div>
          
            <CheckIt />
        </div>
       
    )
}

export default ToDo