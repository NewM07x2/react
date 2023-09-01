import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'List'
    }
  }

  render() {
    const {title} = this.state
    const { deleteTodo, todos } = this.props;
    const list = todos.map(todo => {
      return (
        <li key={todo.id}>{todo.id} {todo.text}
          <button onClick={() => {deleteTodo(todo.id)}}>
            delete
          </button>
        </li>
      )
    })
    return (
      <div>
        <h2>{title}</h2>
        <ui>{list}</ui>
      </div>
    )
  }
}