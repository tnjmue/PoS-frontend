// purple trash can icon: <a href="https://www.flaticon.com/free-icons/pixel" title="pixel icons">Pixel icons created by frelayasia - Flaticon</a>
// writing pen icon: <a href="https://www.flaticon.com/free-icons/pixel" title="pixel icons">Pixel icons created by frelayasia - Flaticon</a>
// purple home icon: [currently over free limit]
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API from '../utils/api';

export default function GameDetails() {
    
    const { gameId } = useParams();
    const [currentGame, setCurrentGame] = useState({});

    useEffect(() => {

    /* if (!gameId) return; */

        API.get(`/api/games/${gameId}`)
        .then(res => {
            console.log("fetched game:", res.data);
            setCurrentGame(res.data);
            })
        .catch(err => console.error(err));
    }, [API, gameId]);

    return (
    <>

    <Header />
    <NavBar />
    <h1 className="header-font">{currentGame.title}</h1>
    

    <div className="image-buttons">
        <img src={currentGame.image} alt="" />
    </div>
    
            <div className="game-info">
                <p>Available on: {currentGame.platforms?.join(", ")}</p>
                <p>Release Year: {currentGame.releaseYear}</p>
                <p>Average Rating: {currentGame.averageRating}</p>
                <p>Genres: {currentGame.genres?.join(", ")}</p>
            </div>
    
    <Footer />
    </>
    )
}

/* title: 
releaseYear: 
dateAdded: 
image: 
averageRating:  enum: ["positive", "okay", "negative"] },
platforms:  enum: ["PC", "PlayStation", "Xbox", "Nintendo", "Mac", "Linux", "Web"] },
genres: enum: ["building", "card", "casual", "horror", "indie", "fighting", "MMO", "platformer", "puzzle", "RPG", "shooter", "simulation", "sports", "strategy", "survival"]} */