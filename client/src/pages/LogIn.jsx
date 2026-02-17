import { useState, useContext } from 'react';
import { AuthContext } from "../context/auth.context";
import { useNavigate, Link } from 'react-router-dom';
import API from '../api';

export default function LogIn(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    
    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext); 

    const handleLogInSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

        API.post("/auth/login", requestBody)
        .then((response) => {
            console.log('JWT token', response.data.authToken );
            storeToken(response.data.authToken); 
            authenticateUser(); 
            navigate("/browse");
        })
        .catch(error => setErrorMessage(error.response.data.message))
    };
    
    
    return (
    <div>
        <h1 className="header-font">Log In</h1>

        <div className="form-page">
            <form className="form chocolate-font" onSubmit={handleLogInSubmit}>
              <label>email:</label>
            <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email address"
            />

            <label>password:</label>
            <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
            />  
            <button type="submit">Log In</button>
            </form>

            { errorMessage && <p className="error-message">{errorMessage}</p> }
 
            <p>Don't have an account yet?</p>
            <span className="bottom-buttons">
            <Link to={"/signup"}><button> Sign Up</button></Link>
            <Link to={"/browse"}><button>Continue without Account </button></Link>
            </span>
        
        </div>
    </div>
    )
}