import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

import UserForm from './Components/UserForm';
import UserDisplay from './Components/UserDisplay';

import axios from 'axios';
import * as yup from 'yup';


const API_URL = "https://reqres.in/api/users"

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false
}


function App() {


  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)


  const postNewUser = newUser => {
    axios
      .post(API_URL, newUser)
      .then(res => {
        setUsers([...users, newUser])
        console.log("is this working?", users)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }


  const inputChange = (name, value) => {

    setFormValues({
      ...formValues, [name]: value
    })
  }


  const formSubmit = () => {
    const newUser = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms
    }

    postNewUser(newUser);
  }


  return (
    <div className="App">
      <UserForm
        change={inputChange}
        submit={formSubmit}
        values={formValues}
      />
      {/* <UserForm /> */}
      {users.map(user => {
        return (
          <UserDisplay key={user.username} values={user}/>
        )
      })}
    </div>
  );
}

export default App;
