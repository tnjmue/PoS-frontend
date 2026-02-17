import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api';

export default function SignUp(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    
    const navigate = useNavigate();

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password, name };

        API.post("/auth/signup", requestBody)
        .then(response => navigate('/login'))
        .catch(error => setErrorMessage(error.response.data.message))
    }
    
    return (
    <div> 
        <h1 className="header-font">Sign Up</h1>
        <div className="form-page">
            <form className="form chocolate-font" onSubmit={handleSignUpSubmit}>
                <label>name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="username"
                    required
            />
               
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
                <button type="submit">Sign Up</button>
            </form>

            { errorMessage && <p className="error-message">{errorMessage}</p> }
 
            <p>Already have account?</p>
            <span className="bottom-buttons">
            <Link to={"/login"}> <button>Log In</button></Link>
            <Link to={"/browse"}><button>Continue without Account </button></Link>
            </span>
            
        </div>
    </div>
    
    )
}