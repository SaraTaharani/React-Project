import React from 'react'
import GamePage from './GamePage'
import Button from './Button';

const GamesList = (props) => {
  const [gamers, setGamers] = useState([]);
  const updateQualitiesOfGamers=(newArrGamers)=>{
    setGamers(newArrGamers);
  }
  const updateGamers = (user) => {
    const gamer = {
      id: gamers.length,
      name: user.name,
      active: false,
      number: Math.floor(Math.random() * 100),
      steps: 0,
      scores: user.scores
    }
    setGamers([...gamers, gamer])
    setState("Game Page");
  }
  gamers[0].active = true;
  setGamers(gamers);
  return (
    <div>
      <Button key={7} handleClickAct={props.handleStartGameBtn} act="Start Game" />
      <Button key={8} handleClickAct={props.handleAddANewGamer} act="Add A New Gamer" />
      {gamers.map((gamer) => <GamePage key={gamer.id} gamerId={gamer.id} gamers={gamers} setGamers={updateQualitiesOfGamers} name={gamer.name} number={gamer.number} steps={gamer.steps} scores={gamer.scores} active={gamer.active} />)}
    </div>
  )
}

export default GamesList