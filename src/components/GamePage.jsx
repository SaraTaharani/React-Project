import React from 'react'
import Button from './Button'
import { useState } from 'react'

const GamePage = (props) => {
    const [number, setNumber] = useState(props.number);
    const handleClickAct = (act, id) => {
        props.gamers[id].active=! props.gamers[id].active;
        props.gamers[id+1].active=! props.gamers[id+1].active;
        props.setGamers(props.gamers);
        setSteps(steps + 1);
        switch (act) {
            case "+1": setNumber(number + 1);
                break;
            case "-1": setNumber(number - 1);
                break;
            case "*2": setNumber(number * 2);
                break;
            case "/2": setNumber(Math.floor(number / 2));
                break;
        }

    }
    const [steps, setSteps] = useState(props.steps);
    const act = [
        { id: 1, act: "+1" },
        { id: 2, act: "-1" },
        { id: 3, act: "*2" },
        { id: 4, act: "/2" }
    ]
    const quit = { id: 5, act: "quit" };
    const newGame = { id: 6, act: "newGame" };
    return (
        <div>
            <h2>Get to 100!!</h2>
            <h3>My name is: {props.name}</h3>
            <h3>Number: {number}</h3>
            <h3>Steps: {steps}</h3>
            {number != 100 
            ? (act.map((act) => <Button key={act.id} gamerId={props.gamerId} handleClickAct={handleClickAct} active={props.active} act={act.act} />)) 
            : (<><Button key={newGame.id} act={newGame.act} /> <br /> <Button key={quit.id} act={quit.act} /></>)}
            <h3>{props.user} scores: {props.scores.map((score) => score + " ")}</h3>
        </div>
    )
}

export default GamePage