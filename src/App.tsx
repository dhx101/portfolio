import './App.css'
import { Outlet } from 'react-router-dom'
import Contact from './components/Contact'

function App() {


  return (
    <>
      <Outlet/>
      <Contact/>
    </>
  )
}

export default App
