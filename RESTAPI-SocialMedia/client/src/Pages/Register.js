import React from 'react'
import "./Login.css"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function Register() {
    
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const login = async () => {
        try {
            await axios.post("http://localhost:8000/api/user", user)
            navigate("/")
        }catch(e) {
            console.log(e)
        }
    }

    return (
        <div className='login-container'>
            Username: <input onChange={e => setUser({ ...user, username: e.target.value })} type='text' /> <br />
            Password: <input onChange={e => setUser({ ...user, password: e.target.value })} type='password' /> <br />
            <button onClick={login}>Login</button>
        </div>
    )
}
