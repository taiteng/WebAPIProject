import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Cat from './pages/Cat'
import CatDetails from './pages/CatDetails'
import AdminCat from './admin/AdminCat';
import Catfacts from './pages/Catfacts';
import Dog from './pages/Dog';
import Shop from './pages/Shop';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/cat" element={<Cat/>}></Route>
        <Route path="/dog" element={<Dog/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/catdetails" element={<CatDetails/>}></Route>
        <Route path="/catfacts" element={<Catfacts/>}></Route>
        <Route path="/admincat" element={<AdminCat/>}></Route>
      </Routes>
    </>
  )
}

export default App
