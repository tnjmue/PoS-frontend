import logo from "../assets/games-cropped.png";
import { Link } from "react-router-dom";

export default function Start() {
    
    return (
    
    <>
        
        <div className="start-header">
            <img src={logo} alt="" />   
            <h1 className="header-font">Pile of Shame</h1>
        </div>
        <hr />

        <div className="start">
            <div className="start-left">
                <p>
                Sick of losing track of how many video games you're playing across platforms?
                Log them here!
                </p>
            </div>

        <div className="start-buttons">
            <p>Want to try us out?</p>
            <Link to={"/signup"}><button> Sign Up</button></Link>

            <p>Already have account?</p>
            <Link to={"/login"}> <button>Log In</button></Link>

            <p>Sneak Peak with no strings attached?</p>
            <Link to={"/browse"}><button>Continue without Account </button></Link>
        </div>

    </div>
    </>
    )
}