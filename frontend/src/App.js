import React from 'react'
import { AboutMe, Education, MainPage } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/education' element={<Education />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
