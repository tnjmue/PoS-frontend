import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
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
    
            <div className="details-page">

                <div className="image-buttons">
                    <img src={currentGame.image} alt="" />
                    <div className="image-buttons-buttons">
                        <button onClick={() => {alert("My functionality will be implemented in the future :)")}}>✚</button>
                        <Link to={"/browse"}><button>Back</button></Link>
                    </div>
                </div>
    
                <div className="game-info">
                    <p> <span>AVAILABLE ON: </span> {currentGame.platforms?.join(", ")}</p>
                    <p><span>RELEASE YEAR: </span> {currentGame.releaseYear}</p>
                    <p><span>AVERAGE RATING: </span> {currentGame.averageRating}</p>
                    <p><span>GENRES: </span> {currentGame.genres?.join(", ")}</p>
                    <p><span>DEVELOPER: </span> {currentGame.developer}</p>
                </div>
    
            </div>

            <Footer />

        </>

    )
}
