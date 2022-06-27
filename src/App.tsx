import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Store } from './pages'
import { Container } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  )
}

export default App
