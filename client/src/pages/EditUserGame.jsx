import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../context/auth.context";
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import API from '../utils/api';

export default function EditUserGame() {

    const { userGameId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        platforms: "",
        personalRating: "",
        hoursPlayed: "",
        notes: ""
    });
    
        useEffect(() => {
            const token = localStorage.getItem("authToken");

            API.get(`/api/userGames/${userGameId}`,
            { headers: { Authorization: `Bearer ${token}` } 
        })
            .then(res => {
                const data = res.data;
            // populate form with backend data
                setFormData({
                    platforms: data.platforms || "",
                    personalRating: data.personalRating || "",
                    hoursPlayed: data.hoursPlayed || "",
                    notes: data.notes || ""
                });
            })
            .catch(err => console.error(err));
        }, [userGameId]);
        

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("authToken");

        API.put(`/api/userGames/${userGameId}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => {
            console.log("User game updated:", formData);
            navigate(`/mygames/${userGameId}`); 
         })
        .catch(err => console.error(err));
  };

    return (

        <>
            <Header />
            <NavBar />

            <h1 className="header-font">Edit Game</h1>


            <div className="edit-page">
                <form className="form edit-form" onSubmit={handleSubmit}>
                    <label>Platforms:</label>
                    <select name="platforms" value={formData.platforms} onChange={handleChange} className="select">
                        <option value="">Select platform</option>
                        <option value="PC">PC</option>
                        <option value="PlayStation">PlayStation</option>
                        <option value="Xbox">Xbox</option>
                        <option value="Nintendo">Nintendo</option>
                        <option value="Mac">Mac</option>
                        <option value="Linux">Linux</option>
                        <option value="Web">Web</option>
                     </select>

                    <label>My rating:</label>
                    <input
                        type="number"
                        name="personalRating"
                        value={formData.personalRating}
                        onChange={handleChange}
                        min="0"
                        max="5"
                        step="1"
                    /> 

                    <label>Hours played:</label>
                    <input
                        type="text"
                        name="hoursPlayed"
                        value={formData.hoursPlayed}
                        onChange={handleChange}
                        placeholder=""
                    /> 

                    <label>My notes:</label>
                    <textarea
                        type="text"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="notes"
                    /> 

                    <button type="submit">save changes</button>
                    <Link to={`/mygames/${userGameId}`}>
                    <button type="button">cancel</button>
                    </Link>

                </form>
            </div>


        </>
    )

}