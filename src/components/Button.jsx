import React from 'react'

const Button = (props) => {
  let act = props.act;
  console.log(props.gamerId)
  return (
    <>
    {(act === "+1" || act === "-1" || act === "/2" || act === "*2") ?
      <button disabled={!props.active} onClick={() => { props.handleClickAct(props.act, props.gamerId) }}>{props.act}</button> :
      <button onClick={() => { props.handleClickAct(props.act) }}>{props.act}</button>
    }
    </>
  )
}

export default Button