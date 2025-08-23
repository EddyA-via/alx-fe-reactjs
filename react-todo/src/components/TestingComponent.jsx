// src/components/TestingComponent.jsx
import React, { useState } from "react";

export default function TestingComponent() {
  const [count, setCount] = useState(0);

  return (
    <div data-testid="testing-component">
      <h2>Testing Component</h2>
      <p data-testid="count">Count: {count}</p>
      <button onClick={() => setCount(count + 1)} data-testid="increment-btn">
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} data-testid="decrement-btn">
        Decrement
      </button>
    </div>
  );
}
