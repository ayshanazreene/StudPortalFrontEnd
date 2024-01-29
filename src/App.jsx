import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import StudProfileView from './Pages/StudProfileView'
import StudSearch from './Pages/StudSearch'
import StudProfileEdit from './Pages/StudProfileEdit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Registration/>}/>
        <Route path='/dash' element={<Dashboard/>} />
        <Route path='/students' element={<StudSearch/>}/>
        <Route path='/profile' element={<StudProfileView id/>} />
        <Route path='/edit' element={<StudProfileEdit id/>} />

      </Routes>
      
   
    </>
  )
}

export default App
