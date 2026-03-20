import { useState } from 'react'
import './App.css'
import { Authprovider } from './features/auth/auth.context'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Authprovider>
    
  </Authprovider>
  </>
  )
}

export default App
