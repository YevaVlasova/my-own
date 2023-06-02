import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import About from './views/About/About'
import Contacts from './views/Contacts/Contacts'
import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
