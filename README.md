<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Hooks Overview</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
      line-height: 1.6;
    }
    h2 {
      color: #4caf50;
    }
    pre {
      background: #f4f4f4;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      font-family: Consolas, 'Courier New', monospace;
    }
  </style>
</head>
<body>
  <h1>React Hooks Overview</h1>

  <h2>useState</h2>
  <p><strong>Definition:</strong> Allows you to add state to functional components.</p>
  <pre><code>
// Example of useState
import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

return (
<div>
<p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>Click me</button>
</div>
);
}
</code></pre>

  <h2>useEffect</h2>
  <p><strong>Definition:</strong> Allows you to perform side effects like data fetching or DOM manipulation.</p>
  <pre><code>
// Example of useEffect
import React, { useState, useEffect } from 'react';

function Example() {
const [count, setCount] = useState(0);

useEffect(() => {
document.title = `You clicked ${count} times`;
}, [count]);

return (
<div>
<p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>Click me</button>
</div>
);
}
</code></pre>

  <h2>useContext</h2>
  <p><strong>Definition:</strong> Lets you access context values directly in functional components.</p>
  <pre><code>
// Example of useContext
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton() {
const theme = useContext(ThemeContext);
return <button style={{ background: theme.background, color: theme.color }}>Themed Button</button>;
}
</code></pre>

  <h2>useRef</h2>
  <p><strong>Definition:</strong> Creates a persistent reference that doesn't cause re-renders.</p>
  <pre><code>
// Example of useRef
import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
const inputRef = useRef(null);

useEffect(() => {
inputRef.current.focus();
}, []);

return <input ref={inputRef} type="text" />;
}
</code></pre>

  <h2>useMemo</h2>
  <p><strong>Definition:</strong> Memoizes a value to avoid recalculating it on every render unless dependencies change.</p>
  <pre><code>
// Example of useMemo
import React, { useMemo } from 'react';

function ExpensiveCalculationComponent({ num1, num2 }) {
const result = useMemo(() => {
return num1 + num2; // Simulate an expensive computation
}, [num1, num2]);

return <div>Result: {result}</div>;
}
</code></pre>

  <h2>useCallback</h2>
  <p><strong>Definition:</strong> Returns a memoized version of a callback function.</p>
  <pre><code>
// Example of useCallback
import React, { useState, useCallback } from 'react';

function Parent() {
const [count, setCount] = useState(0);

const handleClick = useCallback(() => {
console.log('Button clicked!');
}, []);

return <Child onClick={handleClick} />;
}

function Child({ onClick }) {
return <button onClick={onClick}>Click me</button>;
}
</code></pre>

  <h2>useReducer</h2>
  <p><strong>Definition:</strong> Manages complex state logic similar to `useState`, but more powerful.</p>
  <pre><code>
// Example of useReducer
import React, { useReducer } from 'react';

function reducer(state, action) {
switch (action.type) {
case 'increment':
return { count: state.count + 1 };
case 'decrement':
return { count: state.count - 1 };
default:
throw new Error();
}
}

function Counter() {
const [state, dispatch] = useReducer(reducer, { count: 0 });

return (
<div>
<p>Count: {state.count}</p>
<button onClick={() => dispatch({ type: 'increment' })}>+</button>
<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
</div>
);
}
</code></pre>

  <p>These hooks provide React developers with powerful tools to manage state, effects, and performance optimizations in functional components.</p>
</body>
</html>
