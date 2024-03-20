import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AllProducts from './components/AllProducts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AllProducts />} />
      </Routes>
    </Router>
  )
}

export default App