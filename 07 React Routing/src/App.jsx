import { useState } from 'react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
  
  return (
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  )
}

export default App
