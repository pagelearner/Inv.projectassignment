import React from 'react'

import "./Style.css"

const SignUpForm = () => {

 
  function handleSubmit(event) {

    event.preventDefault(); // Prevent the form from submitting automatically


    let emailField = document.getElementById("email"); //input

    let email = emailField.value;

    let passwordField = document.getElementById("password")

    let password = passwordField.value

 
    if(password.length <= 4){

      alert("your password must be greater than 4 characters")

      return false

    }

    if (!email.includes("@")) {

        alert("Your email must contain @");

        return false;

    }


    // Show success message when details are correct

    alert("Thank you! You have successfully signed up.");

    return true;

}
  return (

   
    <div class="body">

        <form onSubmit={handleSubmit} action="">

            <input id="name" type="text" placeholder='Please enter your name' required />

            <br />

            <br />

            <input id='email' type="text" placeholder='please enter a valid email' required />

            <br />

            <br />

            <input id='password' type="text" placeholder='please enter a password' required/>

            <br />

            <br />

            <br />

            <button type='submit'>submit</button>

        </form>

    </div>

  )

}

export default SignUpForm