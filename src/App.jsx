import './App.css'

import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './routes/Dashboard'
import Login from './routes/Login'

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard/*' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
