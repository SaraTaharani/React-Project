import React from 'react'

const SignUpLogIn = (props) => {
  let title = props.title;
  let user={email:"",name:"",password:"", scores:[] }
  const changeUserName = (e) => {
    user.name = e.value;
  }
  const changeUserPassword = (e) => {
    user.password = e.value;
  }
  const changeUserEmail = (e) => {
    user.email = e.value;
  }
  return (
    <>
      <div>
        <h2>{title}</h2>
        {title === "Sign Up" &&   <><h3>user name:</h3>
        <input onChange={(e) => changeUserName(e.target)} type='text'></input></>}
        <h3>email</h3>
        <input onChange={(e) => changeUserEmail(e.target)} type='email'></input>
        <h3>password</h3>
        <input onChange={(e) => changeUserPassword(e.target)} type='password'></input>
        <br /> <button onClick={()=>props.handleClick(user)}>{props.title}</button> <br />
        {title === "Sign Up" && <button onClick={props.signUpToLogInFunc}>already have an account</button>}
        {title === "Log In" && <button onClick={props.logInToSignUpFunc}>don't have an account yet</button>}
      </div>
    </>
  )
}

export default SignUpLogIn