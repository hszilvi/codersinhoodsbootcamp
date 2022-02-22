import React from "react";
// import Moment from "react-moment";
import "./App.css";


const APP_TITLE = "Awesome Pet Shop";

/**
 * Exercise: 1
 *
 * 1. Create a list element and render all animals as list items.
 *
 * Exercise 2
 *
 * 1. Display the APP_TITLE in an h1
 * 2. Display today's date in a p
 */

const App = () => {
  const animals = ["cat", "dog", "giraffe", "pig", "lion", "rabbit"];
  
  const animalList = animals.map(animal => {
      return (
      <li key={animal}>{animal}</li>
    )
  });

  const currentDate = new Date();
  const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    
  return (
      <div>
    
        <ul>{animalList}</ul>
     
        <h1>{APP_TITLE}</h1>
        
        <p>{date}</p>

      </div>
      );
};

export default App;
