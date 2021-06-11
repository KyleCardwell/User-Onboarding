import React from 'react'
import '../App.css'


function UserDisplay(props) {

    const { values } = props;

    return (
        <div className="userDisplay">
            {/* <h2>All My Users</h2> */}
            <h4>{values.username}</h4>
            <p>{values.email}</p>
        </div>
    )
}

export default UserDisplay