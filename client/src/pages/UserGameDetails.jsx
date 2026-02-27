import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
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

        <div className="image-buttons">
            <img src={currentUserGame.gameId?.image} alt="" />
            <div className="image-buttons-buttons">
                <Link to={`/edit/${userGameId}`}><button>Edit</button></Link>
                 <button onClick={handleDelete}>Delete</button>
                <Link to={"/mygames"}><button>Back</button></Link>
            </div>
        </div>

        <div className="game-info">
            <p>platform: {currentUserGame.platforms}</p>
            <p>
                personal rating: <span className="stars">{" "}
                {"★".repeat(currentUserGame.personalRating)}</span> </p>
            <p>hours played: {currentUserGame.hoursPlayed}</p>
            <section>notes: {currentUserGame.notes}</section>
        </div>
        
        <Footer />
        </>
        )
}