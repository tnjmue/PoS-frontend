import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import API from "../api";

export default function GameCard({game}) {
    const { isLoggedIn } = useContext(AuthContext);
    const [showSelect, setShowSelect] = useState(false);

    const handleClick = () => {

        if (!isLoggedIn) {
            alert("This feature is only available with an account.");
        return;
        }
        setShowSelect(true);
    };

    const handleSelect = (e) => {
        const stack = e.target.value;
        if (!stack) return;
    
        const token = localStorage.getItem("authToken");

        API.post("/api/userGames", 
            { gameId: game._id, stack },
            { headers: { Authorization: `Bearer ${token}` } }
        )
            .then(() => {
                console.log("game added to", stack);
                setShowSelect(false);
            })
            .catch(err => console.error(err));
  };
    
    return (
    <>
    
    <div className="game-card">
        <Link to={`/browse/${game._id}`}><img src={game.image} alt="" /></Link>
        <div className="add-title">
            <p>{game.title}</p>
            {!showSelect ? (
            <button onClick={ handleClick }> + </button>
                ) : (
            <select onChange={handleSelect} autoFocus defaultValue="">
            <option value="" disabled>Select stack</option>
            <option value="Want to play">Want to play</option>
            <option value="Owned">Owned</option>
            <option value="Currently playing">Currently playing</option>
            <option value="Played">Played</option>
            </select>
  )}
            </div>
    </div>
    </>
    )
}