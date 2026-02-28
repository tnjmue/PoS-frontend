// attribute error icon: <a href="https://www.flaticon.com/free-icons/pixel" title="pixel icons">Pixel icons created by Freepik - Flaticon</a>
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import warningSign from '../assets/warning-sign.png';
import Flash from '../assets/flash.png';

export default function ErrorPage() {
    
    return (

        <>

        <Header />
        <NavBar /> 

        <span className="error-header">
            <img src={Flash} alt="" />
            <h1 className="header-font">GAME OVER</h1>
        </span>

        <div className="error-page">
            <img src={warningSign} alt="" />
            <h3 className="header-font"><span>404</span> Page not found</h3>
        </div>

        <Footer />
        
        </>
    )
}