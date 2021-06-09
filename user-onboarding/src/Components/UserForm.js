import React from 'react'
import '../App.css'

function UserForm() {
    return (
        <form className="userform">
            <h1>New User Form</h1>

            <label>Name
                <input type="text"/>
            </label>

            <label>Email
                <input type="text"/>
            </label>

            <label>Password
                <input type="text"/>
            </label>

            <label>
                <input type="checkbox"/>I acknowledge that I have read and agree to the Terms of Service
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}

export default UserForm;