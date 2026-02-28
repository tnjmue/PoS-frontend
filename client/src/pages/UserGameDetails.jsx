import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import notesPen from '../assets/edit-cropped.png';
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import API from '../utils/api';

export default function UserGameDetails() {

    const { userGameId } = useParams();
    const navigate = useNavigate();
    const [currentUserGame, setCurrentUserGame] = useState({});

    useEffect(() => {

    if (!userGameId) return;
        const token = localStorage.getItem("authToken");

        API.get(`/api/userGames/${userGameId}`,
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(res => {
            console.log("fetched game:", res.data);
            setCurrentUserGame(res.data);
            })
        .catch(err => console.error(err));
    }, [API, userGameId]);


    const handleDelete = () => {

        if (!window.confirm("Are you sure you want to delete this game?")) return;

        const token = localStorage.getItem("authToken");

        API.delete(`/api/userGames/${userGameId}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
            console.log("game deleted");
            navigate("/mygames");
        })
        .catch(err => console.error(err));
        };


    return (
        <>
    
        <Header />
        <NavBar />

        <h1 className="header-font">{currentUserGame.gameId?.title}</h1>

        <div className="details-page">

            <div className="image-buttons">
                <img src={currentUserGame.gameId?.image} alt="" />
                <div className="image-buttons-buttons">
                    <Link to={`/edit/${userGameId}`}><button>Edit</button></Link>
                    <button onClick={handleDelete}>Delete</button>
                    <Link to={"/mygames"}><button>Back</button></Link>
                </div>
            </div>

            <div className="game-info">
                <h3>GENERAL INFO</h3>
                <p> <span>AVAILABLE ON: </span> {currentUserGame.gameId?.platforms?.join(", ")}</p>
                <p><span>RELEASE YEAR: </span> {currentUserGame.gameId?.releaseYear}</p>
                <p><span>AVERAGE RATING: </span> {currentUserGame.gameId?.averageRating}</p>
                <p><span>GENRES: </span> {currentUserGame.gameId?.genres?.join(", ")}</p>
                <p><span>DEVELOPER: </span> {currentUserGame.gameId?.developer}</p>
                <h3>MY STATS</h3>  
                <p><span>PLATFORM: </span> {currentUserGame.platforms}</p>
                <p>
                    <span>PERSONAL RATING:</span> <span className="stars">{" "}
                    {"★".repeat(currentUserGame.personalRating)}</span> 
                </p>
                <p><span>HOURS PLAYED: </span> {currentUserGame.hoursPlayed}</p>
                <p><span>
                    <img src={notesPen} alt="" />MY NOTES: 
                </span></p>
                 <hr /> 
                <section>{currentUserGame.notes}</section>
            </div>
        </div>
        
        <Footer />

        </>
        )
}