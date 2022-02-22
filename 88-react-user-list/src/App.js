import React, {useState } from "react";
import "./App.css";
import axios from 'axios';
import Button from "./Components/Button";


/**
 * Create a User List app
 *
 * 1. create a state where you will store your users.
 * 2. I want to render all users from my state.
 * 3. add button with class "newUser"
 * 4. when I click on a "newUser" button I want to fetch a new user,
 * add it to state.
 * 5. On user element I want to have full name and button to remove a user.
 * 6. when I click "remove" button, it should remove selected user from my state.
 *
 * NOTE: API for random user - "https://randomuser.me/api/"
 *
 * FEEL FREE TO STYLE YOUR APP WITH CSS
 */

function App() {  
    const API_URL = "https://randomuser.me/api/";
    const [userData, setUserData] = useState([]);
    const [urlIsLoading, setUrlIsLoading] = useState(false);
    const [addedUser, setAddedUser] = useState(false);
/////////////
    const onClickHandler = () => {
        //fetching the data
        console.log('button is working')
        setUrlIsLoading(true);
        axios.get(API_URL)
        .then((response)=> {
            console.log(response.data.results);
            setUserData([...response.data.results, ...userData]);
        }).catch((error) => {
            console.log(error);
            setUrlIsLoading(true);
        }).finally(() => {
            setUrlIsLoading(false);
            setAddedUser(true);
        })
    }
    const removeHandler = (index) => {
        const myUsers=[...userData];
        const selectedUserIndex = userData.findIndex((user) => user.index === index);
        console.log(selectedUserIndex);
        myUsers.splice(selectedUserIndex, 1);
        setUserData(myUsers);
    };

//////////////
    return (
        <div className="App">
            <h1>Random User Generator</h1>
            <Button clicked={onClickHandler}/>
            <div className="addedUsers">
                <ul>
                    {userData.map((user, index) => {
                        return (
                            <li
                            key={user.id.value}
                            >
                                <p>{`Fullname: ${user.name.first} ${user.name.last}`}</p>
                                <button className="removeBtn" onClick={() => removeHandler()}>Remove User</button>
                            </li>
                        )
                    })}  
                </ul>       
            </div>
                  
        </div>     
    )
}
export default App;
