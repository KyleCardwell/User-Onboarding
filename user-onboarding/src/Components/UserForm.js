import React from 'react'
import '../App.css'

function UserForm(props) {

    const { change, submit, values, errors, disabled } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target

        const valueToUse = type === "checkbox" ? checked : value

        change(name, valueToUse)
    }

    return (
        <div>
            <form className="userform">
                <h1>New User Form</h1>

                <label>Name
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>Password
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                        onChange={onChange}                    
                    />I acknowledge that I have read and agree to the Terms of Service
                </label>

                <button
                    type="submit"
                    onClick={onSubmit}
                    disabled={disabled}
                >Submit</button>

                <div className="errors">
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </form>
        </div>
    );
}

export default UserForm;