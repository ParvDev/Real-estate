// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/signin'
import Signup from './pages/Signup'
import Header from './components/Header'

function App() {
  return (
    
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/about" element={ <About /> } /> 
      <Route path="/profile" element={ <Profile /> } /> 
      <Route path="/" element={ <Home /> } /> 
      <Route path="/signin" element={ <Signin /> } /> 
      <Route path="/signup" element={ <Signup /> } /> 
    </Routes>
  </BrowserRouter>
  )
}

export default App