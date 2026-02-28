import { Link } from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import API from "../utils/api";

export default function GameCard({game}) {
    const { isLoggedIn } = useContext(AuthContext);
    const [isAdded, setIsAdded ] = useState(false);
    /* const [showSelect, setShowSelect] = useState(false); */
    const token = localStorage.getItem("authToken");

    // Check if the game is already in the user's library
    useEffect(() => {
    if (!isLoggedIn) return;

    API.get("/api/userGames", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        const exists = res.data.some(userGame => userGame.gameId._id === game._id);
        setIsAdded(exists);
      })
      .catch(err => console.error(err));
    }, [game._id, isLoggedIn, token]);

    const handleAdd = () => {

        if (!isLoggedIn) {
            alert("This feature is only available with an account.");
        return;
        } 

        const defaultStack = "Uncategorized";

        API.post("/api/userGames", 
            { gameId: game._id, stack: defaultStack },
            { headers: { Authorization: `Bearer ${token}` } }
        )
            .then(() => {
                console.log("game added to", defaultStack);
                setIsAdded(true);
                /* setShowSelect(false); */
            })
            .catch(err => console.error(err));
         };


// still want to add drop down select menu on the game card, so you can select the stack immediately after adding it
// instead of having it be Uncategorized per default and having to go to My Games to change it
/*     const openSelect = () => setShowSelect(true);

    const handleSelect = (e) => {

        if (!showSelect) return;

        const stack = e.target.value;
        if (!stack) return;

        API.post("/api/userGames", 
            { gameId: game._id, stack },
            { headers: { Authorization: `Bearer ${token}` } }
        )
            .then(() => {
                console.log("game added to", stack);
                setIsAdded(true);
                setShowSelect(false);
            })
            .catch(err => console.error(err));
        }  */ 

        
    
    return (

        <>
    
            <div className="game-card">

                <Link to={`/browse/${game._id}`}><img src={game.image} alt="" /></Link>

                <div className="add-game">
                    <h3>{game.title}</h3>

                    {!isAdded ? (
                        <button onClick={ handleAdd }> ✚ </button>
                        ) : (
                        <button /* onClick={openSelect} */> ✔ </button> 
                    )}

                    {/* {showSelect && ( 
                        <select onChange={handleSelect} autoFocus defaultValue="">
                            <option value="" disabled>Add to stack</option>
                            <option value="Want to play">Want to play</option>
                            <option value="Owned">Owned</option>
                            <option value="Currently playing">Currently playing</option>
                            <option value="Played">Played</option>
                        </select>     
                    )} */}
            
                </div>
            </div>

        </>

    )
}