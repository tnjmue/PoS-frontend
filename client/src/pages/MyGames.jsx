import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import UserGameCard from '../components/UserGameCard';
import API from '../utils/api';

export default function MyGames() {
    
const [userGames, setUserGames] = useState([]);
const [filteredGames, setFilteredGames] = useState([]);

const token = localStorage.getItem("authToken");

    useEffect(() => {
        API.get("/api/userGames",
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(res => {
            setUserGames(res.data)
            setFilteredGames(res.data)
        })
        .catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        setUserGames(prev => prev.filter(game => game._id !== id));
        setFilteredGames(prev => prev.filter(game => game._id !== id));
     };

    const handleStackChange = (id, newStack) => {
        setUserGames(prev => prev.map(game => game._id === id ? { ...game, stack: newStack } : game));
        setFilteredGames(prev => prev.map(game => game._id === id ? { ...game, stack: newStack } : game));
    };
 

    return (
    <>
    <Header />
    <NavBar />
    
    <h1 className="header-font">My Games</h1>

    <div className="my-games">

    <aside className="filter-column">
    
        <h3>Filter by stack</h3>
        <button onClick={() => setFilteredGames(userGames)}>All</button>
        <button onClick={() => setFilteredGames(userGames.filter(g => g.stack === "Uncategorized"))}>Recently added</button>
        <button onClick={() => setFilteredGames(userGames.filter(g => g.stack === "Owned"))}>Owned</button>
        <button onClick={() => setFilteredGames(userGames.filter(g => g.stack === "Played"))}>Played</button>
        <button onClick={() => setFilteredGames(userGames.filter(g => g.stack === "Currently playing"))}>Currently Playing</button>
        <button onClick={() => setFilteredGames(userGames.filter(g => g.stack === "Want to play"))}>Want to Play</button>
     </aside>  

    <section className="all-games">
            {filteredGames.map((userGame) => {
                return (
                    <UserGameCard key={userGame._id} userGame={userGame} onDelete={handleDelete} onStackChange={handleStackChange} />
                )
            })}
        </section>
        </div>
    
    <Footer />
    </>
    )
}