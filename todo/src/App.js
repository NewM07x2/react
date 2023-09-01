import React from 'react'
import {List} from './components/List'
import {Add} from './components/Add'
import './App.css';

export class TodoApp extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      nextId: 0
    }
  }
  addTodo = (word) => {
    console.log('addTodo', word)
    this.setState({
      todos: [...this.state.todos, {id: this.state.nextId + 1, text: word}],
      nextId: this.state.nextId + 1
    })
  }
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id
      })
    })
  }

  render () {
    return (
      <div className="App">
         <h1>Add Todo List</h1>
         <Add addTodo={this.addTodo} />
         <List todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
  // 親コンポーネントにメインfunctionを記載して子コンポーネントへpropsしていく

}


export default TodoApp;
