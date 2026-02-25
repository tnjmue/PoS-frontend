import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import bgImage from "./assets/starry_sky_stars_black.jpg";

// import pages
import Start from './pages/Start';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import BrowseGames from './pages/BrowseGames';
import GameDetails from './pages/GameDetails';
import MyGames from './pages/MyGames';
import UserGameDetails from './pages/UserGameDetails';
import EditUserGame from './pages/EditUserGame';
import UserAccount from './pages/UserAccount';
import ErrorPage from './pages/ErrorPage';
import AllGames from './pages/AllGames';
import IsPrivate from './components/IsPrivate';


import './App.css'

function App() {

  const API = import.meta.env.VITE_BASE_URL;
  

  return (
    <>
    <main style={{ backgroundImage: `url(${bgImage})` }}>

      <div className="content-container">

        <Routes>
          <Route path="/" element={<Start />} /> 
          <Route path="/browse" element={<BrowseGames />} />
          <Route path="/browse/:gameId" element={<GameDetails />} /> 
          <Route path="/mygames" element={ <IsPrivate> <MyGames /> </IsPrivate> } />
          <Route path="/mygames/:userGameId" element={ <IsPrivate> <UserGameDetails /> </IsPrivate> } />
          <Route path="/edit/:userGameId" element={ <IsPrivate> <EditUserGame /> </IsPrivate> } />  
          <Route path="/account" element={ <IsPrivate> <UserAccount /> </IsPrivate> } /> 
          <Route path="*" element={<ErrorPage />} /> 
          <Route path="/allgames" element={<AllGames />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>

        

      </div>

    </main>

    </>
  )
}

export default App
