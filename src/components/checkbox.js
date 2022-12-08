import React, {useState} from 'react';

function CheckIt () {
    const[checked, setChecked] = useState(false);
    const validate = () =>{
        //setStateCar(!stateCar);
        setChecked(prevValue=>!prevValue)
    }
    return(
        <div className='CheckIt'> 
        <h3> is Done?: {checked?"it's Done" : "it's UnDone"}</h3>
        <button onClick={validate}>mark when done</button>
        
        </div>
        
    );

}

export default CheckIt