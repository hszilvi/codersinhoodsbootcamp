import React from "react";
import {useState} from 'react';
import Counter from "./components/counter/Counter";
import "./App.css";
/**
 * 1. Create component Counter which will have:
 * - button with class {increment}
 * - button with class {decrement}
 * - h1 element which will represent state value
 * - state should hold {counter} value(default value = 0)
 * - with buttons you should be able to in/decrement {counter} value
 *
 * 2. In App component add button with class {newCounter}
 * 3. when you click {newCounter} you should add new counter to view
 * 
 * NOTE: feel free to add some CSS to style your counters.
 */

function App() {
	const [newCounters, setNewCounters] = useState([]);

	const addCounter = () => {
		setNewCounters([...newCounters, newCounters[newCounters.length - 1] + 1 ]);
	};
	return (
		<div className="App">
		{newCounters.map((newCounter) => {
			return (
			<Counter 
				newCounter={newCounter}
			 />
			)
		})}
		<button className="addButton" onClick={addCounter}>Add Counter</button>
		
		</div>
	)
}
export default App;