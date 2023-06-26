import React from 'react'
import "./Login.css"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const login = async () => {
        try {
            const resp = await axios.post("http://localhost:8000/api/auth/login", user)
            sessionStorage.setItem("x-access-token", resp.data.token)
            sessionStorage.setItem('username', user.username);
            sessionStorage.setItem('userid', resp.data.id);
            navigate("/MainPage")
        }catch(e) {
            alert("error")
            console.log(e)
        }

    }

    const register = async () => {
        try {
            navigate("/register")

        }catch(e) {
            console.log(e)
        }

    }

    return (
        <div className='login-container'>
            Username: <input onChange={e => setUser({ ...user, username: e.target.value })} type='text' /> <br />
            Password: <input onChange={e => setUser({ ...user, password: e.target.value })} type='password' /> <br />
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
        </div>
    )
}
