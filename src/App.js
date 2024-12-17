import React from 'react'
import SearchAppBar from './components/Navbar'
import Reservation from './components/Reservation'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import List from './components/List';


export default function App() {
  return (
    <div>
     <Router>
      <SearchAppBar/>
          <Routes><Route path='/' element={<Reservation/>}/></Routes>
          <Routes><Route path='/list' element={<List/>}/></Routes>
    </Router>
    </div>
  )
}
