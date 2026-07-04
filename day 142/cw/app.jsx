import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: color,
          marginBottom: "20px",
        }}
      ></div>

      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("orange")}>Orange</button>
      <button onClick={() => setColor("brown")}>Brown</button>
    </div>
  );
}

export default App;