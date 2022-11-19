import React from "react";
import MyList from "./MyList";
import MyTodos from "./MyTodos";

const todos = [
  { id: 1, title: "Buy Milk", completed: false },
  { id: 2, title: "Go to the movies", completed: false },
  { id: 3, title: "Water the plants", completed: true },
  { id: 4, title: "Sleep", completed: true },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <MyList names={['Billy', 'Kate','Jane']} />  
        <MyTodos todos={todos} />      
      </div>
    );
  }
}

export default App;