//install axios npm i axios
/*Axios is an HTTP client library based on promises. 
It makes sending asynchronous HTTP requests to REST endpoints easier 
and helps you perform CRUD operations. 
This REST endpoint/API could be an external API like the Google API, GitHub API, 
and so on – or it could be your own backend Node. js server
*/
import axios from "axios";

const baseUrl="http://localhost:5000/";

const refreshTodoList = (setToDo, setText, isUpdating, setIsUpdating) =>{
    if(isUpdating === true){
        console.log('Paso por aqui para actualizar')
        setText("")
        getAllToDo(setToDo)
        setIsUpdating(false)
    }else{
            console.log('Paso por aqui la primera vez')
            setText("")
            getAllToDo(setToDo)
    }
}

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo, setIsUpdating, isUpdating) => {
    axios
        .post(`${baseUrl}`, { text })
        .then((data) => {
            console.log(data);
            refreshTodoList(setToDo, setText, setIsUpdating, isUpdating)
        })
        .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating, isUpdating) => {
    axios
        .patch(`${baseUrl}${toDoId}`, { text })
        .then((data) => {
            refreshTodoList(setToDo, setText, isUpdating, setIsUpdating)
        })
        .catch((err) => console.log(err))
}


const deleteToDo = (toDoId, setToDo) => {
    axios
        .delete(`${baseUrl}${toDoId} `)
        .then((data) => {
            
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }