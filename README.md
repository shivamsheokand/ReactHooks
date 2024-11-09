
React Hooks Overview
====================

useState
--------

**Definition:** Allows you to add state to functional components.

    
    // Example of useState
    import React, { useState } from 'react';
    
    function Counter() {
    const [count, setCount] = useState(0);
    
    return (
    
    You clicked {count} times
     setCount(count + 1)}>Click me
    
    );
    }
    

useEffect
---------

**Definition:** Allows you to perform side effects like data fetching or DOM manipulation.

    
    // Example of useEffect
    import React, { useState, useEffect } from 'react';
    
    function Example() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
    document.title = `You clicked ${count} times`;
    }, [count]);
    
    return (
    
    You clicked {count} times
     setCount(count + 1)}>Click me
    
    );
    }
    

useContext
----------

**Definition:** Lets you access context values directly in functional components.

    
    // Example of useContext
    import React, { useContext } from 'react';
    import { ThemeContext } from './ThemeContext';
    
    function ThemedButton() {
    const theme = useContext(ThemeContext);
    return Themed Button;
    }
    

useRef
------

**Definition:** Creates a persistent reference that doesn't cause re-renders.

    
    // Example of useRef
    import React, { useRef, useEffect } from 'react';
    
    function TextInputWithFocusButton() {
    const inputRef = useRef(null);
    
    useEffect(() => {
    inputRef.current.focus();
    }, []);
    
    return ;
    }
    

useMemo
-------

**Definition:** Memoizes a value to avoid recalculating it on every render unless dependencies change.

    
    // Example of useMemo
    import React, { useMemo } from 'react';
    
    function ExpensiveCalculationComponent({ num1, num2 }) {
    const result = useMemo(() => {
    return num1 + num2; // Simulate an expensive computation
    }, [num1, num2]);
    
    return Result: {result};
    }
    

useCallback
-----------

**Definition:** Returns a memoized version of a callback function.

    
    // Example of useCallback
    import React, { useState, useCallback } from 'react';
    
    function Parent() {
    const [count, setCount] = useState(0);
    
    const handleClick = useCallback(() => {
    console.log('Button clicked!');
    }, []);
    
    return ;
    }
    
    function Child({ onClick }) {
    return Click me;
    }
    

useReducer
----------

**Definition:** Manages complex state logic similar to \`useState\`, but more powerful.

    
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
    
    Count: {state.count}
     dispatch({ type: 'increment' })}>+
     dispatch({ type: 'decrement' })}>-
    
    );
    }
    

These hooks provide React developers with powerful tools to manage state, effects, and performance optimizations in functional components.