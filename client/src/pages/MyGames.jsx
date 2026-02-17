import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react';
import UserGameCard from '../components/UserGameCard';
import API from '../api';

export default function MyGames() {
    
const [userGames, setUserGames] = useState([]);

const token = localStorage.getItem("authToken");

    useEffect(() => {
        API.get("/api/userGames",
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(res => setUserGames(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
    <>
    <Header />
    <NavBar />
    
    <h1>My Games</h1>
    <section className="all-games">
            {userGames.map((userGame) => {
                return (
                    <UserGameCard key={userGame._id} userGame={userGame}/>
                )
            })}
        </section>
    </>
    )
}