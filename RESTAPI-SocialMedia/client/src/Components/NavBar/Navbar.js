import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='nav-container'>

    <span onClick={() => navigate("/")} className='nav-item'>logOut</span>
    <span onClick={() => navigate("/MainPage")} className='nav-item'>MainPage</span>
    <span onClick={() => navigate("/Register")} className='nav-item'>Register</span>

    </div>
  )
}
