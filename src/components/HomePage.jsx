import React from 'react'
import SignUpLogIn from './SignUpLogIn'
import { useState } from 'react'
import GamesList from './GamesList';



const HomePage = () => {
  let users = localStorage.getItem("users") === null ? [] : JSON.parse(localStorage.getItem("users"));
  const [state, setState] = useState("Sign Up");
  
  const signUp = (user) => {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    updateGamers(user);
  }
  const logIn = (user) => {
    if (users.map(userFromArr => {
      if (userFromArr.email === user.email) { user.name = userFromArr.name; user.scores = userFromArr.scores; }
    })) {
      updateGamers(user);
    }
    else {
      alert("you don't have an account");
      setState("Sign Up");
    }
  }

  const signUpToLogIn = () => {
    setState("Log In");
  }
  const logInToSignUp = () => {
    setState("Sign Up");
  }
  const handleStartGameBtn = () => {
    setState("Game Page");
  }
  const handleAddANewGamer = () => {
    setState("Sign Up");
  }
  return (
    <div>
      {state === "Sign Up" && <SignUpLogIn title={state} handleClick={signUp} signUpToLogInFunc={signUpToLogIn} />}
      {state === "Log In" && <SignUpLogIn title={state} handleClick={logIn} logInToSignUpFunc={logInToSignUp} />}
      {state === "Game Page" && <GamesList handleStartGameBtn={handleStartGameBtn} handleAddANewGamer={handleAddANewGamer}/>}
    </div>

  )
}

export default HomePage