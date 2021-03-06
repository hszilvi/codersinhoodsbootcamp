import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Content from "./Components/Content/Content"
import Footer from "./Components/Footer/Footer"


/**
 * Exercises:
 *
 * 1. Create a Navigation component, import and use it here.
 * 2. Create a Header component, import and use it here.
 * 3. Create a Form component, import and use it here.
 * 4. Create a Content component, import and use it here.
 * 5. Create a Footer component, import and use it here.
 *
 * NOTE: Layout for each component is up to you.
 */


function App() {
	return (
		<div className="App">
		<Navigation />
		<Header />
		<Form />
		<Content />
		<Footer />	
		</div>
		);
}

export default App;
