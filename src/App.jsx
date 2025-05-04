import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GamesList from './components/GamesList'
import LogIn from './components/SignUpLogIn'
import Game from './components/GamePage'
import HomePage from './components/HomePage'

function App() {
  const user={user:"racheli", number:50 ,steps:2 ,active:true ,scores:["5", "7"]}
  return (
    <>
      {/* <LogIn /> */}
      {/* <Game user={user.user} number={user.number} steps={user.steps} scores={user.scores} active={true} /> */}
      <HomePage />
    </>
  )
}

export default App
