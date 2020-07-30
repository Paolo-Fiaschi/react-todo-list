
// modifiche
// FUNCTION COMPONENT
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ToDoList from './ToDoList';
import HomePage from './HomePage';
import Footer from './Footer';


const App = ()=> {

  return(
    <Router>
      <Navbar/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/ToDoList" component={ToDoList}/>
      <Footer/>
    </Router>
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
