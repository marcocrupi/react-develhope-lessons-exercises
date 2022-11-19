import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {/* Invece di ul e li posso anche renderizzare altri elementi html */}
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              {todo.completed && <span>(COMPLETED)</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
