// attribute controller icon author: <a href="https://www.flaticon.com/free-icons/pixelated" title="pixelated icons">Pixelated icons created by Miguel C Balandrano - Flaticon</a>
// heart icon: <a href="https://www.flaticon.com/free-icons/bisexual" title="bisexual icons">Bisexual icons created by frelayasia - Flaticon</a>
// "next" arrow icon: <a href="https://www.flaticon.com/free-icons/pixel" title="pixel icons">Pixel icons created by Taufik Ramadhan - Flaticon</a>git 
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export default function NavBar() {
    
    const {isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return (
    <>
    
    <nav className="navbar">
       <ul className="navbar-links ">

            <li><NavLink to="/browse">Browse Games</NavLink></li>

            <li><NavLink to="/allgames">All Games</NavLink></li>

            
                <li><NavLink to="/mygames">My Games</NavLink></li>
    

            {isLoggedIn && (
                <li><NavLink to="/account">My Account</NavLink></li>
            )}

            {!isLoggedIn && (
            <li><NavLink to="/login">Log In</NavLink></li>
            )}

            {isLoggedIn && (
            <li><a href="#" onClick={() => logOutUser()}>Log Out</a></li>)}

            {!isLoggedIn && (
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            )}
        </ul> 
       
    </nav>
    
    </>
    )
}