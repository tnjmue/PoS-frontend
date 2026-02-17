import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react';
import API from '../api';
import GameCard from '../components/GameCard';

export default function AllGames() {
    
    const [games, setGames] = useState([]);

    useEffect(() => {
        API.get("/api/games")
        .then(res => setGames(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
    <>
    <Header />
    <NavBar />
    <div>
    <h1>All Games</h1>
    <section className="all-games">
        {games.map((game) => {
            return (
                <GameCard key={game._id} game={game}/>
            )
        })}
    </section>
    </div>

    </>
    )
}