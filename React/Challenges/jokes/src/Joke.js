import React from 'react'

function jokes(props) {
  return (
    <div>
        {props.setup && <h3>{props.setup}</h3>}
        <p>{props.punchline}</p>
        <hr/>
    </div>
  )
}

export default jokes