import { useState, useEffect } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import GameCard from '../components/GameCard';
import API from '../utils/api';


export default function BrowseGames() {
    
    const [ searchTerm, setSearchTerm ] = useState("");
    const [platformFilter, setPlatformFilter] = useState(""); 
    const [genreFilter, setGenreFilter] = useState(""); 
    const [games, setGames] = useState([]);

    useEffect(() => {
        API.get("/api/games")
            .then(res => setGames(res.data))
            .catch(err => console.error(err));
    }, []);

    const filteredGames = games.filter(game => {
        const matchesTitle = game.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPlatform = platformFilter ? game.platforms.includes(platformFilter) : true;
        const matchesGenre = genreFilter ? game.genres.includes(genreFilter) : true;

        return matchesTitle && matchesPlatform && matchesGenre;
    });

    return (
        
        <>

            <Header />
            <NavBar />
    
            <h1 className="header-font">Browse Games</h1>

            <div className="browse-bars">

                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <select value={platformFilter} onChange={e => setPlatformFilter(e.target.value)} className="select">
                    <option value="">All Platforms</option>
                    <option value="PC">PC</option>
                    <option value="PlayStation">PlayStation</option>
                    <option value="Xbox">Xbox</option>
                    <option value="Nintendo">Nintendo</option>
                    <option value="Mac">Mac</option>
                    <option value="Linux">Linux</option>
                    <option value="Web">Web</option>
                </select>

                <select value={genreFilter} onChange={e => setGenreFilter(e.target.value)} className="select">
                    <option value="">All Genres</option>
                    <option value="building">Building</option>
                    <option value="card">Card</option>
                    <option value="casual">Casual</option>
                    <option value="horror">Horror</option>
                    <option value="indie">Indie</option>
                    <option value="fighting">Fighting</option>
                    <option value="MMO">MMO</option>
                    <option value="platformer">Platformer</option>
                    <option value="suzzle">Puzzle</option>
                    <option value="RPG">RPG</option>
                    <option value="shooter">Shooter</option>
                    <option value="simulation">Simulation</option>
                    <option value="sports">Sports</option>
                    <option value="strategy">Strategy</option>
                    <option value="survival">Survival</option>
                </select>

            </div>

            <section className="all-games">
                {filteredGames.map(game => (
                    <GameCard key={game._id} game={game} />
                ))}
            </section>
    
            <Footer />

        </>

    );
}