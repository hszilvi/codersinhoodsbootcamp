import React from 'react';
import {useState} from 'react';


export default function  Counter() {
 const [counter, setCounter] = useState(0);
 const incrementHandler = () => {
   setCounter(counter + 1);
 };
 const decrementHandler = () => {
   setCounter(counter - 1);
 }

  return ( 
    <div className="counter">
    <h1>Counter: {counter}</h1>
        <div className="btns">
            <button className="incBtn" onClick={incrementHandler}>+</button>
            <button className="decBtn" onClick={decrementHandler}>-</button>
        </div> 
    </div>
  );
};
