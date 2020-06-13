
// modifiche
// FUNCTION COMPONENT
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
const App = ()=> {
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


// CLASS COMPONENT
// import React from 'react';
// import './App.css';

// const Todo = (props) => {
//   return (
//     <div style={{textDecoration: props.todo.completato ? 'line-through':''}} className='todo'>
//       {props.todo.name}
//       <div>
//         <button onClick={()=> props.completaTodo(props.index)}>Completa</button>
//       </div>
//     </div>
//   )
// }
// class Form extends React.Component {
//   state = {
//     value: ''
//   }
//   handleSubmit = (e)=> {
//     if (this.state.value.trim() === "" ) {
//       return alert ("scrivi qualcosa")
//     }
//     e.preventDefault();
//     this.props.submit(this.state.value)
//     this.setState ({
//       value: ""
//     })

//   }
//   onChangeText = (e)=>{
//     this.setState ({
//       value: e.target.value
//     })
//   }
//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <input className='input' type="text" value={this.state.value} placeholder="aggiungi todo" onChange={this.onChangeText}/>
//       </form>
//     )

//   }
// }
// class App extends React.Component {
//   state = {
//     todos: [

//       {name: 'imparare react', completato: false},
//       {name:'imparare gli state', completato: false},
//       {name: 'imparare i component', completato: false},
//     ]
//   }
//   addTodo = (todo) => {
//     const newTodos = [...this.state.todos, {name: todo}]
//     this.setState ({
//       todos: newTodos
//     })
//   }
//   completaTodo = (index)=> {
//     const newTodos = [...this.state.todos];
//     newTodos[index].completato = true;
//     this.setState ({
//       todos: newTodos
//     })
//   }
//   render(){
//     return(
//       <div className="app">
//         <div className="todo-list">
//           {this.state.todos.map((item, index) => (
//             <Todo key = {index} todo={item} index={index} completaTodo={this.completaTodo}/>
//           ))}
//           <Form submit={this.addTodo}/>
//         </div>
//       </div>
//     )
//   }
// }
export default App;
