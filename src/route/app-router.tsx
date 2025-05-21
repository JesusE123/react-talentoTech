import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from '../components/products';
import Login from '../components/login';
import App from '../App';
const AppRouter = () => {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
  )
}

export default AppRouter