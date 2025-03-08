import { useState } from 'react'
import './App.css'
import { Button } from 'primereact/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-gray-900 font-bold my-3 animate-pulse'>Reactjs + Prime React + Tailwind CSS</h1>
      <Button label='submit' icon='pi pi-check' />
    </>
  )
}

export default App
