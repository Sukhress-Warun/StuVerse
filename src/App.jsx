import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import StudentForm from './components/StudentForm/StudentForm'
import StudentsTable from './components/StudentsTable/StudentsTable'

function App() {
  const [login, setLogin] = useState(false)

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row p-0 m-0">
          <div className="col-auto p-0 m-0">
            <Sidebar login={login} setLogin={setLogin} />
          </div>
          <div className="col p-0 m-0">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login login={login} setLogin={setLogin}/>}/>
              <Route path="/signup" element={<Signup login={login} setLogin={setLogin} />}/> 
              <Route path="/StudentForm" element={<StudentForm login={login} />}/>
              <Route path="/StudentsTable" element={<StudentsTable login={login} />}/>
            </Routes>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
