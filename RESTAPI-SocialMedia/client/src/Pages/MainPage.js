import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostTable from '../Components/PostTable/PostTable'
import Navbar from '../Components/NavBar/Navbar'
import AddPost from './AddPost'

export default function MainPage() {
    return (
        <div>
            <h1>Welcome, {sessionStorage.getItem("username")}</h1>
            <Navbar />
            <AddPost />
            <PostTable />
        </div>
    )
}
