import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      id: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: this.state.id,
      label: e.target[0].value,
    };

    if (!newTodo.label) return;

    this.setState((state) => ({
      todos: [...state.todos, newTodo],
      id: state.id + 1,
    }));

    e.target[0].value = "";
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="todo" />
          <input type="submit" value="Add Todo" />
        </form>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.label}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
