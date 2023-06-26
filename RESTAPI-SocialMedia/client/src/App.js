import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import MainPage from './Pages/MainPage'
import Register from './Pages/Register'

function App() {
  return <div >
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </div>
}

export default App