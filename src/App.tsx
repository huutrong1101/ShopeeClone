import { useState } from 'react'
import './App.css'
import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)
  const routeElements = useRouteElement()

  return (
    <>
      <div>{routeElements}</div>
      <ToastContainer />
    </>
  )
}

export default App
