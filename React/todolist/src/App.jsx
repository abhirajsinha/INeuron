import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Todo/>  
    </div>
  )
}

export default App
