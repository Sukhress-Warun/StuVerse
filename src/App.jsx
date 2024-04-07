import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import StudentForm from './components/StudentForm/StudentForm'

function App() {
  const [login, setLogin] = useState(true)

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row p-0 m-0">
          <div className="col-auto p-0 m-0">
            <Sidebar login={login} />
          </div>
          <div className="col p-0 m-0">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<Signup />}/> 
              <Route path="/StudentForm" element={<StudentForm />}/>
            </Routes>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
