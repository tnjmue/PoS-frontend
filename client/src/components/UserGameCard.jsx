import { Link } from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import editButton from "../assets/edit-button.png";
import API from "../api";

export default function UserGameCard({userGame, onDelete}) {
    const { isLoggedIn } = useContext(AuthContext);
    const [stack, setStack] = useState(userGame.stack);
    const navigate = useNavigate();
    const token = localStorage.getItem("authToken");


   /*  useEffect(() => {
        API.get("/api/userGames", { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setUserGames(res.data))
            .catch(err => console.error(err));
        }, []);  */

    const handleEdit = () => navigate(`/edit/${userGame._id}`);

    const handleDelete = () => {

        if (!window.confirm("Are you sure you want to delete this game?")) return;

        API.delete(`/api/userGames/${userGame._id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(() => {
            console.log("game deleted");
            // callback to parent to remove deleted game from My Games page
             if (onDelete) onDelete(userGame._id);
            })
            .catch((err) => console.error(err));
    };


    const handleSelect = (e) => {
        const value = e.target.value;

        // for delete and edit option
        if (!value) return;

        if (value === "__edit__") return handleEdit();
        if (value === "__delete__") return handleDelete();

        // stack update
        const newStack = e.target.value;
        setStack(newStack);

        const token = localStorage.getItem("authToken");
        
        API.put(`/api/userGames/${userGame._id}`, 
            { stack: newStack },
            { headers: { Authorization: `Bearer ${token}` } }
            )
            .then(() => {
                console.log("stack updated to", newStack);
                })
            .catch(err => console.error(err));
    };

    
    return (
    <>
    
    <div className="game-card">
       <Link to={`/mygames/${userGame._id}`}>
        <img src={userGame.gameId.image} alt="" />
       </Link>

        <h3>{userGame.gameId.title}</h3>

        <div className="add-title">
            <select value={stack} 
                onChange={handleSelect}
                disabled={!isLoggedIn}
                className="select">
                    <option value="Uncategorized">Uncategorized</option>
            <option value="Want to play">Want to play</option>
            <option value="Owned">Owned</option>
            <option value="Currently playing">Currently playing</option>
            <option value="Played">Played</option>
            <option value="__edit__" className="__edit__">Edit</option>
            <option value="__delete__" className="__delete__">Delete</option>
            </select>
        </div>

    </div>
    </>
    )
}