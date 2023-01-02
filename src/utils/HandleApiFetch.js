
const baseUrl="http://localhost:5000/";




const refreshTodoList = (setToDo, setText, isUpdating, setIsUpdating) =>{
    if(isUpdating === true){
       // console.log('Paso por aqui para actualizar')
        setText("")
        
        getAllToDo(setToDo)
        setIsUpdating(false)
    }else{
       //     console.log('Paso por aqui la primera vez')
            setText("")
            
            getAllToDo(setToDo)
    }
}


const getAllToDo = (setToDo) => {
    fetch(baseUrl)
    .then(res => res.json())
     .then(( data ) => {
           console.log('data ---> ', data);
           setToDo(data)
       })
}


const addToDo = (text, setText, setToDo, setIsUpdating, isUpdating) => {
     text ={
        text,
    }
   
   fetch(baseUrl, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
    }, body: JSON.stringify(text)})

        .then(res => res.json())
        .then((data) => {
            console.log(data);
            refreshTodoList(setToDo, setText, setIsUpdating, isUpdating)
        })
        .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating, isUpdating) => {
    text ={
        text,   
    }
    
   
   fetch(`${baseUrl}${toDoId}`, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
    }, body: JSON.stringify(text)})
    .then(res => res.json())
    .then((data) => {
        refreshTodoList(setToDo, setText, isUpdating, setIsUpdating)
    })
    .catch((err) => console.log(err))       
}

//----------
const updateCheck = (toDoId, done, setIsUpdating, isUpdating) => {
    done ={
        done
    }
   
   fetch(`${baseUrl}${toDoId}`, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
    }, body: JSON.stringify(done)})
    .then(res => res.json())
    .then((data) => {
        refreshTodoList( isUpdating, setIsUpdating)
    })
    .catch((err) => console.log(err))       
}
//--------------






const deleteToDo = (toDoId, setToDo) => {
    fetch(`${baseUrl}${toDoId}`, {
        method: "DELETE",
        mode: "cors", 
        })
        .then(res => res.json())
        .then((data) => {
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err)) 
    
}





export { getAllToDo, addToDo, updateToDo, deleteToDo, updateCheck }

