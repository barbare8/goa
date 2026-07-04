import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(prev => prev + 1)}>
        
      </button>

      <button onClick={() => setCount(prev => prev - 1)}>
        
      </button>

      <button onClick={() => setCount(prev => prev * 2)}>
       
      </button>
    </div>
  );
}