import GitHubUser from "./GitHubUser";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <GitHubUser username={username}></GitHubUser>
    </div>
  );
}

export default App;
