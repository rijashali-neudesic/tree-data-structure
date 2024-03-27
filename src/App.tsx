import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { mockData1, mockData2, mockData3 } from "./mock";
import { deriveNodeContainer } from "./utils";

function App() {
  const [state] = useState(mockData3);
  return (
    <div className="App" style={{ padding: 100 }}>
      {deriveNodeContainer(state)}
    </div>
  );
}

export default App;
