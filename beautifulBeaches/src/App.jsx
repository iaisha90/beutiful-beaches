import React from "react"
import Home from "./components/Home"
import ContactUs from "./pages/ContactUs"
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/contact" element = {<ContactUs />} />
        </Routes>
      </div>
    </>
  )
}

export default App
