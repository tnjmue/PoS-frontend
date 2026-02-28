import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export default function NavBar() {
    
    const {isLoggedIn, user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOutUser();
    }

    return (

        <>
    
            <nav className="navbar">
                <ul className="navbar-links ">

                    <li><NavLink to="/browse">Browse</NavLink></li>

            
                    <li><NavLink to="/mygames">My Games</NavLink></li>
    

                    {isLoggedIn && (
                    <li><NavLink to="/account">My Account</NavLink></li>
                    )}

                    {!isLoggedIn && (
                    <li><NavLink to="/login">Log In</NavLink></li>
                    )}

                    {isLoggedIn && (
                    <li><a href="#" onClick={handleLogout}>Log Out</a></li>)}

                    {!isLoggedIn && (
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                    )}

                </ul>   
            </nav>
    
        </>

    )
}