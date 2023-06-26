import React from 'react'
import "./Login.css"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function AddPost() {
    const [Post, setPost] = useState({})
    const navigate = useNavigate()
    const d = new Date();

    const AddPost = async () => {
        try {
            console.log(Post);
            const token = sessionStorage.getItem("x-access-token")
            const resp = await axios.post(`http://localhost:8000/api/post`, Post, {
                headers: { "x-access-token": token }
            })
            alert(resp.data)
        } catch (e) {
            setPost([])
            alert("Invalid Token")
            navigate("/")
        }
    }

    return (
        <div className='nav-container'>
            add post: <input onChange={e => setPost({ ...Post, body: e.target.value ,userid:sessionStorage.getItem("userid"), postdsate: String(d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate()) })} name='ID' type='text' /> <br />
            <button onClick={AddPost}>Add post</button>
        </div>
    )
}
