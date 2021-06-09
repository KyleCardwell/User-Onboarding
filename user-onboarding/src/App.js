import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

import UserForm from './Components/UserForm';
import UserDisplay from './Components/UserDisplay';

import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false
}

const allUsers = []

function App() {

const [users, setUsers] = useState(allUsers)
const [formValues, setFormValues] = useState(initialFormValues)

const inputChange = (name, value) => {

  setFormValues({
    ...formValues, [name]: value
  })
}

const formSubmit = () => {
  const newUser = {
    name: formValues.name,
    email: formValues.email,
    password: formValues.password,
    terms: formValues.terms
  }
}

  return (
    <div className="App">
      <UserForm
        change={inputChange}
        submit={formSubmit}
        values={formValues}
      />
      {/* <UserForm /> */}
      <UserDisplay />
    </div>
  );
}

export default App;
