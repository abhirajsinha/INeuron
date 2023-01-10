import React from 'react'

function Jokes(props) {
  // const [isShown, setIsShown] = React.useState(true);
  // function toggleShown(){
  //       setIsShown(prevShown => !prevShown)
  // }
  const [messages, setMessages] = React.useState(["a"]);
  return (
    <div>
        {/* {props.setup && <h3>{props.setup}</h3>}
        {isShown && <p>{props.punchline}</p>}
        <button onClick={toggleShown}>{isShown ? 'Reset Joke': 'See Joke'}</button>
        <hr/> */}
        <div>
          {messages.length!==0 && <h1>You have undread message</h1>}
        </div>
    </div>
  )
}

export default Jokes