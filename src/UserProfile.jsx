import React from "react";

function UserProfile({ name, age}) {

    return (
        <div>
            <h2>Name: Miles , {name}</h2>
            <p>Age:34, {age}</p>
        </div>
    )
}


export default UserProfile