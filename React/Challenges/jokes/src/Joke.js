import React from 'react'

function Jokes(props) {
  const [isShown, setIsShown] = React.useState(true);
  function toggleShown(){
        setIsShown(prevShown => !prevShown)
  }
  return (
    <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown && <p>{props.punchline}</p>}
        <button onClick={toggleShown}>{isShown ? 'Reset Joke': 'See Joke'}</button>
        <hr/>
    </div>
  )
}

export default Jokes