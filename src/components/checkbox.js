import React, {useState, done} from 'react';
import { BiCheckbox, BiCheckboxMinus } from 'react-icons/bi';
//import {updateCheck} from "./utils/HandleApiFetch"

function CheckIt () {
    const[checked, setChecked] = useState(false);
    const validate = ({done}) =>{
        done=Boolean
        setChecked(done=>!done);
       // updateCheck()
    }
    return(
        <div className='CheckIt'> 
        <button onClick={validate}> {checked ? "it's Done" : "Pending"} </button>      
        </div>
    
    );

}

export default CheckIt