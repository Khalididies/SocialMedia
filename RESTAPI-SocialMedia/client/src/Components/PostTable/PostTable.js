import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function PostTable() {
    const [posts, setPosts] = useState([])
    const [updatedStud, setUpdatedpost] = useState({})
    const navigate = useNavigate()

    const getData = async (token) => {
        try {
            const resp = await axios.get("http://localhost:8000/api/post", {
                headers: { "x-access-token": token }
            })
            setPosts(resp.data)
        } catch (e) {
            setPosts([])
            alert("Invalid Token")
            navigate("/")
        }
    }

    const deletePost = async (id, userid) => {
        let loginUesr = sessionStorage.getItem("userid")
        console.log(userid, loginUesr);
        if (userid == loginUesr) {
            try {
                const token = sessionStorage.getItem("x-access-token")
                const resp = await axios.delete(`http://localhost:8000/api/post/${id}`, {
                    headers: { "x-access-token": token }
                })
                alert(resp.data)
            } catch (e) {
                setPosts([])
                alert("Invalid Token")
                navigate("/")
            }
        } else {
            alert("you are not the post owner")
        }
    }

    const UpdatePost = async (id, userid) => {
        let loginUesr = sessionStorage.getItem("userid")
        console.log(userid, loginUesr);
        if (userid == loginUesr) {
            try {
                const token = sessionStorage.getItem("x-access-token")
                const resp = await axios.put(`http://localhost:8000/api/post/${id}`, updatedStud, {
                    headers: { "x-access-token": token }
                })
                alert(resp.data)
            } catch (e) {
                setPosts([])
                alert("Invalid Token")
                navigate("/")
            }
        } else {
            alert("you are not the post owner")
        }

    }

    useEffect(() => {
        const token = sessionStorage.getItem("x-access-token")
        if (!token) navigate("/")
        getData(token)
    }, [posts])

    return (
        <div className='nav-container'>
            <table border={1}>
                <thead>
                    <th>id</th>
                    <th>user id</th>
                    <th>body</th>
                    <th>Delete</th>
                    <th>Update</th>
                </thead>
                <tbody>
                    {
                        posts.map(post => {
                            return <tr key={post._id}>
                                <td>{post._id}</td>
                                <td>{post.userid}</td>
                                <td>{post.body}<br /><input onChange={e => setUpdatedpost({ ...updatedStud, body: e.target.value })} /></td>
                                <td><button onClick={() => deletePost(post._id, post.userid)}>Delete</button></td>
                                <td><button onClick={() => UpdatePost(post._id, post.userid)}>Update</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
