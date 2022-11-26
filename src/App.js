import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList
          render={(list) => {
            return <li key={list.id}>{list.label}</li>;
          }}
        />
      </div>
    );
  }
}

export default App;
