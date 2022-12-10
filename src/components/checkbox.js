import React, {useState, done} from 'react';
import { BiCheckbox, BiCheckboxMinus } from 'react-icons/bi';


function CheckIt () {
    const[checked, setChecked] = useState(done);
    const validate = () =>{
        // example ... setStateCar(!stateCar);
        setChecked(done=>!done)
    }
    return(
        <div className='CheckIt'> 
        <button onClick={validate}> {checked?"it's Done" : "Pending"} </button>      
        </div>
    
    );

}

export default CheckIt