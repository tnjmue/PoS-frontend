import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import API from "../api";

export default function UserGameCard({userGame}) {
    const { isLoggedIn } = useContext(AuthContext);
    /* const [showSelect, setShowSelect] = useState(false); */


    const handleSelect = (e) => {
        const stack = e.target.value;
        if (!stack) return;
    };
    
    return (
    <>
    
    <div className="game-card">
        <img src={userGame.gameId.image} alt="" />
        <div className="add-title">
            <p>{userGame.title}</p>
            <select onChange={handleSelect} autoFocus defaultValue="">
            <option value="" disabled>Select stack</option>
            <option value="Want to play">Want to play</option>
            <option value="Owned">Owned</option>
            <option value="Currently playing">Currently playing</option>
            <option value="Played">Played</option>
            </select>

            </div>
    </div>
    </>
    )
}