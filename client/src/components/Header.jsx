import logo from "../assets/games.png";

export default function Header() {

    return (

        <div className="header-box">
            <div className="header">
                <img src={logo} alt="" />
                <h1>Pile of Shame</h1>
            </div>
        
        </div>
        
    )
}