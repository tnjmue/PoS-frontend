import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'

function App() {
  

  return (
    <>
        <Routes>
        <Route path="/" element={<Start />} /> 
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/browse" element={<BrowseGames />} />
        <Route path="/browse/:gameid" element={<GameDetailsPage />} /> 
        <Route path="/mygames" element={<MyGamesPage />} /> 
        <Route path="/account" element={<UserAccount />} /> 
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>

    </>
  )
}

export default App
