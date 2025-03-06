import { useState } from 'react'
import './App.css'
import { Button } from 'primereact/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button label='submit' icon='pi pi-check' />
    </>
  )
}

export default App
