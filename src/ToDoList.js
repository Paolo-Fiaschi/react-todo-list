import React, {useState} from 'react';
import './App.css';

const Todo = (props) => {
    return (
      <div style={{textDecoration: props.todo.completato ? 'line-through':''}} className='todo'>
        {props.todo.name}
        <div>
          <button onClick={()=> props.completaTodo(props.index)}>Completa</button>
        </div>
      </div>
    )
}
const Form = (props)=> {
const [value, setValue]= useState();
const handleSubmit = (e)=> {
    if (value.trim() === "" ) {
    return alert ("scrivi qualcosa")
    }
    e.preventDefault();
    props.submit(value)
    setValue('');
}
const onChangeText = (e)=>{
    setValue(e.target.value);
}

return(
    <form onSubmit={handleSubmit}>
    <input className='input' type="text" value={value} placeholder="aggiungi todo" onChange={onChangeText}/>
    </form>
)
}

const ToDoList = ()=> {
const [todos, setTodos] = useState([
    {name: 'imparare react', completato: false},
    {name:'imparare gli state', completato: false},
    {name: 'imparare i component', completato: false},
]);

const addTodo = (todo) => {
    const newTodos = [...todos, {name: todo}]
    setTodos(newTodos)
}
const completaTodo = (index)=> {
    const newTodos = [...todos];
    newTodos[index].completato = true;
    setTodos(newTodos);
}
return(
    <div className="app">
        <div className="todo-list">
        {todos.map((item, index) => (
            <Todo key = {index} todo={item} index={index} completaTodo={completaTodo}/>
        ))}
        <Form submit={addTodo}/>
        </div>
    </div>
    )
    
}

export default ToDoList
 