// purple trash can icon: <a href="https://www.flaticon.com/free-icons/pixel" title="pixel icons">Pixel icons created by frelayasia - Flaticon</a>
// writing pen icon: <a href="https://www.flaticon.com/free-icons/pixel" title="pixel icons">Pixel icons created by frelayasia - Flaticon</a>
// purple home icon: [currently over free limit]
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API from '../api';

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
    <h1>{currentGame.title}</h1>
    <img src={currentGame.image} alt="" />
    </>
    )
}