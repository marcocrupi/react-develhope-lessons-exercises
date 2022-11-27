import { Sum } from './Sum';
import './App.css';

function App() {
  let numbers = [1,2,3,4]
  return (
    <div className="App">
      <Sum numbers={numbers}></Sum>
    </div>
  );
}

export default App;
