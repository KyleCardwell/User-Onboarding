import React from 'react'
import '../App.css'

function UserForm(props) {

    const { change, submit, values } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value } = evt.target
        change()
    }

    return (
        <div>
            <form className="userform">
                <h1>New User Form</h1>

                <label>Name
                    <input
                        type="text"
                        name="userName"
                        value="userName"
                    />
                </label>

                <label>Email
                    <input type="email"/>
                </label>

                <label>Password
                    <input type="password"/>
                </label>

                <label>
                    <input type="checkbox"/>I acknowledge that I have read and agree to the Terms of Service
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;