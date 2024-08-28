import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import SpecificMovie from './pages/SpecificMovie/SpecificMovie'

const App = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In");
        navigate("/");
      }
      else{
        console.log("Logged Out");
        navigate("/login");
      }
    })
  },[])

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/player/:id' element={<Player/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/tv-shows" element={<SpecificMovie title="TV Shows" category="tv"  />} />
        <Route path="/movies" element={<SpecificMovie title="Movies" category="movie" />} />
        <Route path="/new&popular" element={<SpecificMovie title="New & Popular" category="trending" />} />
      </Routes>
      
    </div>
  )
}

export default App