import React from "react"
import { Routes, Route } from 'react-router-dom';
import Login from './../../pages/login'
import Home from './../../pages/home'

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default Main
