import React, { useState } from "react";
import uniqid from "uniqid"

const UserForm = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('users')));
// const [user, setUser] = useState([{
//     id: uniqid(),
//     firstName: '',
//     lastName: '',
//     age: '',
//     gender: ''
// }]);
const [newUser, setNewUser] = useState([{
    id: uniqid(),
    firstName: '',
    lastName: '',
    age: '',
    gender: ''

}]);
//--------------
// const changeFirstName = (e) => {
//     const firstName = e.target.value;
//     console.log(firstName);
//     setUser({...newUser, firstName: firstName})
// }
// const changeLastName = (e) => {
//     const lastName = e.target.value;
//     console.log(lastName);
//     setUser({...newUser, lastName: lastName});
// }
// const changeAge = (e) => {
//     const age = e.target.value;
//     console.log(age);
//     setUser({...newUser, age: age});
// }
// const changeGender = (e) => {
//     const gender = e.target.value;
//     console.log(gender);
//     setUser({...newUser, gender: gender})
// }

//----------------- 
const addNewUser = (user) => {
   
    const myNewUser = {
        id: uniqid(),
        firstName: '',
        lastName: '',
        age: '',
        gender: ''};
    console.log('mynewuser', myNewUser);
    const listUsers = [...user, myNewUser];
    console.log('listuser', listUsers);
    setUser(listUsers);
    localStorage.setUser('users', JSON.stringify(listUsers))
}

const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('submit')
    if (!newUser) return;
    addNewUser(user);
    setNewUser('')
    
}

return (
<div>
    <form className="form" onSubmit={handleSubmit}>
        <label>Enter your first name: 
            <input className="firstName"
            id="id"
            type="text"
            placeholder="first name"
            value={newUser.firstName}
            onChange={(e) => {setNewUser(e.target.value)}}
            />
        </label>  
     
        <label>Enter your last name: 
            <input className="lastName"
            id="id"
            type="text"
            placeholder="last name"
            value={newUser.lastName}
            onChange={(e) => {setNewUser(e.target.value)}}
            />
        </label>    
        <label>Enter your age: 
            <input className="age"
            id="id"
            type="number"
            placeholder="your age"
            value={newUser.age}
            onChange={(e) => {setNewUser(e.target.value)}}
            />
        </label>    
        <label>Enter your gender: 
            <input className="gender"
            id="id"
            type="select"
            placeholder="your gender"
            value={newUser.gender}
            onChange={(e) => {setNewUser(e.target.value)}}
            />
        </label>  
        <button type="submit">Submit</button>   
    </form>
    <ul>
        <li>
            <p>User name: {newUser.firstName} {newUser.lastName}</p>  
            <p>User age: {newUser.age}</p>
            <p>User gender: {newUser.gender}</p>
        </li>
        
    </ul>
    

</div>


)


};

export default UserForm;
